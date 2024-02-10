import { NextResponse } from 'next/server';
import { isNewProduct } from '@/types/Product/ParseProduct';

import { prisma } from '@/lib/prisma';

export async function POST({ json }: Request) {
  const newProduct = await json();

  if (!isNewProduct(newProduct)) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
  }

  const {
    brand_id,
    category_id,

    tags,

    product_date,
    product_description,
    product_image,
    product_name,
    product_price,
    product_stock,
  } = newProduct;

  const product = await prisma.product.create({
    data: {
      product_description,
      product_image,
      product_name,
      product_price,
      product_stock,
      product_date,

      brand_id,
      category_id,

      tags: {
        create: tags.map((t) => ({ tag: { connect: { tag_id: t } } })),
      },
    },
  });

  return NextResponse.json(product);
}
