import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { isNewCart } from '@/types/Cart/ParseCart';
import { getServerSession, Session } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/authOptions';

type UserSession = Session & { user : { user_id: number } };

export async function POST({ json }: Request) {
  const newCart = await json();
  const session = await getServerSession(authOptions) as UserSession;

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  console.log({ newCart });

  if (!isNewCart(newCart)) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
  }

  const {
    cart_count,
    product_id,
  } = newCart;

  const cart = await prisma.cart.create({
    data: {
      cart_count,
      product_id,
      user_id: session.user?.user_id,
    },
  });

  return NextResponse.json(cart);
}
