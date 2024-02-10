import { isUpdateCategory } from '@/types/Category/ParseCategory';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST({ json }: Request) {
  const updateCategory = await json();

  if (!isUpdateCategory(updateCategory)) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const {
    category_id, category_name, category_description,
  } = updateCategory;

  const category = await prisma.category.update({
    where: { category_id },
    data: {
      category_description,
      category_name,
    },
  });

  return category;
}
