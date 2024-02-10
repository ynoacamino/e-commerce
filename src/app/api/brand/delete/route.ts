import { isNumber } from '@/lib/parserTypes';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST({ json }: Request) {
  const deleteBrand = await json();

  if (
    !deleteBrand
    || !('brand_id' in deleteBrand)
    || !isNumber(deleteBrand.brand_id)
  ) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const { brand_id } = deleteBrand;

  const brand = await prisma.brand.delete({
    where: { brand_id },
  });

  return brand;
}
