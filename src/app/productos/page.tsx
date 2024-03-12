// import { useSearchParams } from 'next/navigation';
import { Checkbox } from '@/components/ui/checkbox';
import Title from '@/components/ui/title';
import { CardV } from '@/components/ui/ProductCard';

import Select from '@/components/productosPage/Select';
import Pagination from '@/components/productosPage/Pagination';

import { type PopultedProduct, type OrderBy } from '@/types/Product/Product';

import { prisma } from '@/lib/prisma';

const LIMIT = 8;

const getProducts = async ({ page = '1', orderBy = 'new-products' }: { page: string, orderBy: OrderBy }) => {
  const products = await fetch('http://localhost:3000/api/product/read', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      limit: LIMIT,
      skip: (Number(page) - 1) * LIMIT,
      orderBy,
    }),
  }).then((res) => res.json());

  return products as PopultedProduct[];
};

const getLength = async () => {
  const length = await prisma.product.count();

  return length;
};

export default async function ProductosPage({
  searchParams,
}: {
  searchParams : { page: string, orderBy: OrderBy }
}) {
  const { orderBy, page } = searchParams;
  const data = await getProducts({ page, orderBy });
  const total = await getLength();

  return (
    <div className="w-full flex">
      <div className="max-w-52 w-full border-r-[1px] border-border pl-8 py-10">
        <h2 className="text-3xl font-bold mb-2">
          Filtros
        </h2>
        <form className="flex flex-col gap-6">
          {
            Array.from({ length: 5 }).map(() => (
              <div key={crypto.randomUUID()}>
                <Title>
                  Categoria
                </Title>
                <div className="flex flex-col pl-6 gap-2">
                  <label className="flex gap-2 items-center ">
                    <Checkbox />
                    <span>
                      Accept
                    </span>
                  </label>
                  <label className="flex gap-2 items-center ">
                    <Checkbox />
                    <span>
                      Accept
                    </span>
                  </label>
                  <label className="flex gap-2 items-center ">
                    <Checkbox />
                    <span>
                      Accept
                    </span>
                  </label>
                </div>
              </div>
            ))
          }
        </form>
      </div>
      <div className="flex flex-col flex-1">
        <div className="w-full flex py-4 px-6 items-center justify-between border-b-[1px] border-border">
          <Select />
          <Pagination
            className="w-auto mx-0"
            page={Number(searchParams.page) || 1}
            total={Math.ceil(total / LIMIT)}
          />
        </div>
        <div className="w-full grid gap-4 p-4 md:grid-cols-4 grid-cols-2">
          {
            data.map(({
              brand, product_id, product_image, product_name, product_price,
            }) => (
              <CardV
                key={crypto.randomUUID()}
                brand_name={brand.brand_name}
                product_id={product_id}
                product_name={product_name}
                product_price={product_price}
                product_image={product_image}
              />
            ))
          }
        </div>
        <Pagination
          className="my-10"
          page={Number(searchParams.page) || 1}
          total={Math.ceil(total / LIMIT)}
        />
      </div>
    </div>
  );
}
