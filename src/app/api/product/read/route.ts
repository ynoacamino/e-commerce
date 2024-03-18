import { NextResponse } from 'next/server';
import { isFilterQuery } from '@/types/Product/ParseProduct';
import { prisma } from '@/lib/prisma';
import algoliasearch from 'algoliasearch';
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
    limit,
    skip,
    orderBy,
  } = filterQuery;

  if (product_id) {
    const item = await findById({ product_id });
    return NextResponse.json(item);
  }

  const items = await findAll({
    price, brand_id, rate, category_id, product_id, limit, skip, orderBy,
  });

  return NextResponse.json(items);
}

export async function GET() {
  const products = await prisma.product.findMany();

  const data = products.map((p) => ({
    ...p,
    objectID: p.product_id,
    product_url: `https://e-commerce-ynoacamino.vercel.app/item/${p.product_id}`,
  }));

  const { ALGOLIA_APLICATION_ID, ALGOLIA_ADMIN_API_KEY, ALGOLIA_INDEX_NAME } = process.env;

  const client = algoliasearch(ALGOLIA_APLICATION_ID || '', ALGOLIA_ADMIN_API_KEY || '');
  const index = client.initIndex(ALGOLIA_INDEX_NAME || '');

  index.saveObjects(data)
    .then((objectIds) => {
      console.log({ objectIds });
    })
    .catch(console.log);

  return Response.json({ response: 'ok' });
}
