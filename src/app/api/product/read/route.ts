import { NextResponse } from 'next/server';
import { isFilterQuery } from '@/types/Product/ParseProduct';
import { findAll, findById } from './controllerRead';

export async function POST(req: Request) {
  const filterQuery = await req.json();

  if (!isFilterQuery(filterQuery)) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const {
    brand_id,
    category_id,
    price,
    rate,
    product_id,
  } = filterQuery;

  if (product_id) {
    const item = await findById({ product_id });
    return NextResponse.json(item);
  }

  const items = await findAll({
    price, brand_id, rate, category_id, product_id,
  });

  return NextResponse.json(items);
}
