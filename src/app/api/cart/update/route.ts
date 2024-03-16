import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { isUpdateCart } from '@/types/Cart/ParseCart';

// Esta ruta no se usa, en caso de usarla arregla el error de la línea 13
export async function POST({ json }: Request) {
  const updateCart = await json();

  if (!isUpdateCart(updateCart)) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
  }

  const { cart_count, product_id } = updateCart;

  const cart = await prisma.cart.update({
    where: {
      user_id_product_id: {
        product_id,
        user_id: 1,
      },
    },
    data: {
      cart_count,
    },
  });

  return NextResponse.json(cart);
}
