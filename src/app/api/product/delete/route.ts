import { isNumber } from '@/lib/parserTypes';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST({ json }: Request) {
  const { id } = await json();

  if (id && isNumber(id)) {
    await prisma.product.delete({
      where: { product_id: id },
    });

    return NextResponse.json({ message: 'Item deleted' });
  }

  return NextResponse.json({ error: 'Item not found' }, { status: 404 });
}
