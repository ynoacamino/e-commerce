import { NextResponse } from 'next/server';
import { findAll, findById } from './controllerRead';

export async function GET(req: Request) {
  const {
    price, brand_id, rate, category_id, id,
  } = await req.json();

  if (id) {
    const item = await findById({ id });
    return NextResponse.json(item);
  }

  const items = await findAll({
    price, brand_id, rate, category_id,
  });

  return NextResponse.json(items);
}
