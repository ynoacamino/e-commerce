import { isNumber } from '@/lib/parserTypes';
import { prisma } from '@/lib/prisma';

export async function POST({ json }: Request) {
  const { category_id } = await json();

  if (category_id && isNumber(category_id)) {
    const category = await prisma.category.findUnique({ where: { category_id } });

    return category;
  }

  const categories = await prisma.category.findMany();

  return categories;
}
