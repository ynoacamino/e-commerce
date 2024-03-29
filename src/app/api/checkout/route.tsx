import { MercadoPagoConfig, Preference } from 'mercadopago';
import { getServerSession, Session } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/authOptions';

type UserSession = Session & { user : { user_id: number } };

export async function POST(): Promise<void | Response> {
  let session;
  try {
    session = await getServerSession(authOptions) as UserSession;
  } catch (error) {
    console.error('getServerSession', error);
    return Response.json({}, { status: 500 });
  }

  if (!session) {
    return Response.json({
      error: 'Unauthorized',
    }, { status: 401 });
  }

  const cart = await prisma.cart.findMany({
    where: {
      user_id: session.user.user_id,
    },
    include: {
      product: true,
      user: true,
    },
  });

  const client = new MercadoPagoConfig({
    accessToken: process.env.MERCADO_PAGO_ACCESS as string,
    options: {
      timeout: 5000,
      idempotencyKey: 'abc',
    },
  });

  const preference = new Preference(client);

  const items = cart.map((cartItem) => ({
    title: cartItem.product.product_name,
    quantity: cartItem.cart_count,
    currency_id: 'PEN',
    id: cartItem.product.product_id.toString(),
    unit_price: cartItem.product.product_price,
    category_id: 'art',
    description: cartItem.product.product_description,
    picture_url: cartItem.product.product_image,
  }));

  try {
    const response = await preference.create({
      body: {
        items,
        back_urls: {
          success: `${process.env.URL_API}/pagos`,
          failure: `${process.env.URL_API}/carrito-de-compras/failure`,
          pending: `${process.env.URL_API}/carrito-de-compras/pending`,
        },
        notification_url: `${process.env.URL_API}api/orderHook`,
        metadata: {
          user_id: session.user.user_id,
        },
      },
    });

    return NextResponse.json({
      init_point: response.init_point,
      preference_id: response.id,
    });
  } catch (error) {
    console.error('mercadopago', error);
    return Response.json({}, { status: 500 });
  }
}
