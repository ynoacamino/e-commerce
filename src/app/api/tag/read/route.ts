import { prisma } from '@/lib/prisma';
import { isNumber } from '@/lib/parserTypes';
import { NextResponse } from 'next/server';

export async function POST({ json }: Request) {
  const { tag_id } = await json();

  if (tag_id && isNumber(tag_id)) {
    const tag = await prisma.tag.findUnique({
      where: { tag_id },
    });
    return NextResponse.json(tag);
  }

  const tags = await prisma.tag.findMany();

  return NextResponse.json(tags);
}
