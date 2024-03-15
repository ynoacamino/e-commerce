import { MercadoPagoConfig, Payment } from 'mercadopago';
import { prisma } from '@/lib/prisma';

export async function POST(req:Request) {
  const url = new URL(req.url);
  const client = new MercadoPagoConfig({
    accessToken: 'TEST-2540608626419579-031511-49e8e52b4c0bbaf273759e49b3c7e66e-1729753630',
    options: {
      timeout: 5000,
      idempotencyKey: 'abc',
    },
  });

  const payment = new Payment(client);

  try {
    if (url.searchParams.get('type') === 'payment') {
      await payment.get({ id: url.searchParams.get('data.id') || '', requestOptions: {} });

      await prisma.cart.deleteMany({
        where: {
          user_id: 1,
        },
      });
    }
  } catch (error : any) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ message: 'ok' });
}
