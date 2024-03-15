import { MercadoPagoConfig, Preference } from 'mercadopago';
import { getServerSession, Session } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '../auth/[...nextauth]/authOptions';

type UserSession = Session & { user : { user_id: number } };

export async function POST() {
  const session = await getServerSession(authOptions) as UserSession;

  if (!session) {
    return {
      status: 401,
      body: { error: 'Unauthorized' },
    };
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

  const response = await preference.create({
    body: {
      items,
      back_urls: {
        success: 'http://localhost:3000/carrito-de-compras/success',
        failure: 'http://localhost:3000/carrito-de-compras/failure',
        pending: 'http://localhost:3000/carrito-de-compras/pending',
      },
      notification_url: 'https://d25a-45-230-251-19.ngrok-free.app/api/orderHook',
    },
  });

  console.log({
    init_point: response.init_point,
    preference_id: response.id,
  });

  return Response.json({
    init_point: response.init_point,
    preference_id: response.id,
  });
}
