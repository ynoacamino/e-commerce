import { isUpdateProduct } from '@/types/Product/ParseProduct';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST({ json }: Request) {
  const updateProduct = await json();

  if (!isUpdateProduct(updateProduct)) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const {
    brand_id,
    category_id,

    product_date,
    product_description,
    product_id,
    product_image,
    product_name,
    product_price,
    product_stock,

    tags,
  } = updateProduct;

  const updatedProduct = await prisma.product.update({
    data: {
      brand_id,
      category_id,

      product_date,
      product_description,
      product_image,
      product_name,
      product_price,
      product_stock,

      tags: {
        create: tags.map((t) => ({ tag: { connect: { tag_id: t } } })),
      },
    },
    where: {
      product_id,
    },
  });

  return NextResponse.json(updatedProduct);
}
