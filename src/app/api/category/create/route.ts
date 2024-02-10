import { prisma } from '@/lib/prisma';
import { isNewCategory } from '@/types/Category/ParseCategory';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const newCategory = await req.json();

  if (!isNewCategory(newCategory)) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const {
    category_name,
    category_description,
  } = newCategory;

  const category = await prisma.category.create({
    data: {
      category_description,
      category_name,
    },
  });

  return category;
}
