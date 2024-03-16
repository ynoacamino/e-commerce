import { MercadoPagoConfig, Payment } from 'mercadopago';
import { prisma } from '@/lib/prisma';

export async function POST(req:Request) {
  const url = new URL(req.url);
  const client = new MercadoPagoConfig({
    accessToken: process.env.MERCADO_PAGO_ACCESS as string,
    options: {
      timeout: 5000,
      idempotencyKey: 'abc',
    },
  });

  const payment = new Payment(client);

  try {
    if (url.searchParams.get('type') === 'payment') {
      const data = await payment.get({ id: url.searchParams.get('data.id') || '', requestOptions: {} });

      if (!data.id || !data.metadata?.user_id) {
        throw new Error('Payment not found');
      }

      await prisma.payment.create({
        data: {
          payment_id: data.id,
          user_id: data.metadata.user_id,
        },
      });

      await prisma.cart.deleteMany({
        where: {
          user_id: data.metadata.user_id,
        },
      });

      return Response.json({ message: 'ok' });
    }
  } catch (error : any) {
    console.error('Error message:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ message: 'ok' });
}
