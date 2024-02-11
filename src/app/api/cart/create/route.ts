import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { isNewCart } from '@/types/Cart/ParseCart';

export async function POST({ json }: Request) {
  const newCart = await json();

  if (!isNewCart(newCart)) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
  }

  const {
    cart_count,
    product_id,
    user_id,
  } = newCart;

  const cart = await prisma.cart.create({
    data: {
      cart_count,
      product_id,
      user_id,
    },
  });

  return NextResponse.json(cart);
}
