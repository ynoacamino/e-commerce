import { MercadoPagoConfig, Payment } from 'mercadopago';
import { prisma } from '@/lib/prisma';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getServerSession, Session } from 'next-auth';
import Image from 'next/image';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';

type UserSession = Session & { user : { user_id: number } };

const getPayments = async ({ user_id }: { user_id: number }) => {
  const client = new MercadoPagoConfig({
    accessToken: process.env.MERCADO_PAGO_ACCESS as string,
    options: {
      timeout: 5000,
      idempotencyKey: 'abc',
    },
  });

  const payment = new Payment(client);

  const payments = await prisma.payment.findMany({
    where: {
      user_id,
    },
    include: {
      user: true,
    },
  });

  const compras = payments.map(async (p) => {
    const data = await payment.get({ id: p.payment_id, requestOptions: {} });

    return ({
      ...p,
      products: data.additional_info?.items,
      amount: data.transaction_amount,
    });
  });

  return Promise.all(compras);
};

export default async function ComprasPage() {
  const session = await getServerSession(authOptions) as UserSession;

  if (!session) {
    return (
      <div>
        <h1>Debes iniciar sesión</h1>
      </div>
    );
  }

  const data = await getPayments({ user_id: session.user.user_id });

  return (
    <div className="w-full flex flex-col my-10 flex-1 gap-10">
      {
        data.map((p) => (
          <section key={crypto.randomUUID()}>
            <h1 className="text-3xl font-bold">
              Recibo: #
              {' '}
              {p.payment_id}
            </h1>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">ID del usuario</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="w-[80px]">ID del producto</TableHead>
                  <TableHead>Nombre del producto</TableHead>
                  <TableHead>Precio</TableHead>
                  <TableHead>Cantidad</TableHead>
                  <TableHead>Monto</TableHead>
                  <TableHead>Imagen</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {p.products?.map(({
                  id, quantity, title, unit_price, picture_url,
                }) => (
                  <TableRow key={crypto.randomUUID()}>
                    <TableCell className="font-medium">{session.user.user_id}</TableCell>
                    <TableCell>{session.user.name}</TableCell>
                    <TableCell>{id}</TableCell>
                    <TableCell>{title}</TableCell>
                    <TableCell>{unit_price}</TableCell>
                    <TableCell>{quantity}</TableCell>
                    <TableCell>{unit_price * quantity}</TableCell>
                    <TableCell>
                      <Image
                        src={picture_url || ''}
                        alt={title}
                        width={80}
                        height={80}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={7}>Total pagado</TableCell>
                  <TableCell className="text-start">{p.amount}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </section>

        ))
      }
    </div>
  );
}
