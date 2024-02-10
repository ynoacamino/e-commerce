import { prisma } from '@/lib/prisma';

import { ProductFilterQuery, RateRangeEnum, PriceRangeEnum } from '@/types/Product';

const rateDetails = {
  [RateRangeEnum['0-1']]: { rating: { rating_rate: { gte: 0, lte: 1 } } },
  [RateRangeEnum['1-2']]: { rating: { rating_rate: { gte: 0, lte: 1 } } },
  [RateRangeEnum['2-3']]: { rating: { rating_rate: { gte: 0, lte: 1 } } },
  [RateRangeEnum['3-4']]: { rating: { rating_rate: { gte: 0, lte: 1 } } },
  [RateRangeEnum['4-5']]: { rating: { rating_rate: { gte: 0, lte: 1 } } },
};

const priceDetails = {
  [PriceRangeEnum['0-50']]: { product_price: { gte: 0, lte: 50 } },
  [PriceRangeEnum['50-100']]: { product_price: { gte: 50, lte: 100 } },
  [PriceRangeEnum['100-150']]: { product_price: { gte: 100, lte: 150 } },
  [PriceRangeEnum['150-200']]: { product_price: { gte: 150, lte: 200 } },
  [PriceRangeEnum['200-300']]: { product_price: { gte: 200, lte: 300 } },
  [PriceRangeEnum['300-400']]: { product_price: { gte: 300, lte: 400 } },
  [PriceRangeEnum['400-500']]: { product_price: { gte: 400, lte: 500 } },
  [PriceRangeEnum['+500']]: { product_price: { gte: 500 } },
};

export async function findById({ id } : { id: number }) {
  const item = await prisma.product.findUnique({
    where: { product_id: id },
  });

  return item;
}

export async function findAll(query: ProductFilterQuery) {
  const items = await prisma.product.findMany({
    where: {
      AND: [
        {
          OR: query.price?.map((p) => priceDetails[p]),
        },
        {
          OR: query.rate?.map((r) => rateDetails[r]),
        },
        {
          OR: query.brand_id?.map((b) => ({ brand: { brand_id: b } })),
        },
        {
          OR: query.category_id?.map((c) => ({ category: { category_id: c } })),
        },
      ],
    },
  });

  return items;
}
