import { isNumber } from '@/lib/parserTypes';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST({ json }: Request) {
  const { category_id } = await json();

  if (category_id && isNumber(category_id)) {
    const category = await prisma.category.findUnique({ where: { category_id } });

    return NextResponse.json(category);
  }

  const categories = await prisma.category.findMany();

  return NextResponse.json(categories);
}
