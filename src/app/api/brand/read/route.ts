import { isNumber } from '@/lib/parserTypes';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST({ json }: Request) {
  const { brand_id } = await json();

  if (brand_id && !isNumber(brand_id)) {
    const brand = await prisma.brand.findUnique({
      where: { brand_id },
    });
    return NextResponse.json(brand);
  }

  const brands = await prisma.brand.findMany();

  return brands;
}
