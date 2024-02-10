import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

import { isUpdateBrand } from '@/types/Brand/ParseBrand';

export async function POST({ json }: Request) {
  const updateBrand = await json();

  if (!isUpdateBrand(updateBrand)) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const { brand_id, brand_name } = updateBrand;

  const brand = await prisma.brand.update({
    where: { brand_id },
    data: { brand_name },
  });

  return brand;
}
