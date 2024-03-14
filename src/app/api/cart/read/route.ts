import { isNumber } from '@/lib/parserTypes';
import { prisma } from '@/lib/prisma';
import { getServerSession, Session } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../../auth/[...nextauth]/authOptions';

type UserSession = Session & { user : { user_id: number } };

export async function POST({ json }: Request) {
  const session = await getServerSession(authOptions) as UserSession;
  const { product_id } = await json();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (
    product_id
    && isNumber(product_id)
  ) {
    const cart = await prisma.cart.findUnique({
      where: {
        user_id_product_id: {
          product_id,
          user_id: session.user.user_id,
        },
      },
      include: {
        product: true,
        user: true,
      },
    });

    return NextResponse.json(cart);
  }

  const carts = await prisma.cart.findMany({
    where: {
      user_id: session.user.user_id,
    },
    include: {
      product: true,
      user: true,
    },
  });

  return NextResponse.json(carts);
}
