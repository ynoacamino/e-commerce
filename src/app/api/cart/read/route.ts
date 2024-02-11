import { isNumber } from '@/lib/parserTypes';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST({ json }: Request) {
  const { product_id, user_id } = await json();

  if (
    product_id
    && user_id
    && isNumber(product_id)
    && isNumber(user_id)
  ) {
    const cart = await prisma.cart.findUnique({
      where: {
        user_id_product_id: {
          product_id,
          user_id,
        },
      },
    });

    return NextResponse.json(cart);
  }

  const carts = await prisma.cart.findMany({
    where: {
      user_id,
    },
  });

  return NextResponse.json(carts);
}
