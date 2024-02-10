import { isNumber } from '@/lib/parserTypes';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST({ json }: Request) {
  const { id } = await json();

  if (id && isNumber(id)) {
    const product = await prisma.product.delete({
      where: { product_id: id },
    });

    return NextResponse.json(product);
  }

  return NextResponse.json({ error: 'Item not found' }, { status: 404 });
}
