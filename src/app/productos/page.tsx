// import { useSearchParams } from 'next/navigation';
import { Checkbox } from '@/components/ui/checkbox';
import Title from '@/components/ui/title';
import { CardV } from '@/components/ui/ProductCard';

import Select from '@/components/productosPage/Select';
import Pagination from '@/components/productosPage/Pagination';

import { type PopultedProduct, type OrderBy } from '@/types/Product/Product';

import { prisma } from '@/lib/prisma';
import { Brand, Category } from '@prisma/client';
import Rating from '@/components/itemPage/Rating';

const LIMIT = 20;

const getProducts = async ({ page = '1', orderBy = 'new-products' }: { page: string, orderBy: OrderBy }) => {
  try {
    const products = await fetch(`${process.env.URL_API}/api/product/read`, {
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
  } catch (error) {
    return [];
  }
};

const getLength = async () => {
  const length = await prisma.product.count();

  return length;
};

const getCategories = async () => {
  try {
    const categories = await fetch(`${process.env.URL_API}/api/category/read`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    }).then((res) => res.json());

    return categories as Category[];
  } catch (error) {
    return [];
  }
};

const getBrands = async () => {
  try {
    const brands = await fetch(`${process.env.URL_API}/api/brand/read`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    }).then((res) => res.json());

    return brands as Brand[];
  } catch (error) {
    return [];
  }
};

export default async function ProductosPage({
  searchParams,
}: {
  searchParams : { page: string, orderBy: OrderBy }
}) {
  const { orderBy, page } = searchParams;
  const data = await getProducts({ page, orderBy });
  const total = await getLength();
  const categories = await getCategories();
  const brands = await getBrands();

  return (
    <div className="w-full flex">
      <div className="max-w-52 w-full border-r-[1px] border-border pl-8 py-10">
        <h2 className="text-3xl font-bold mb-2">
          Filtros
        </h2>
        <form className="flex flex-col gap-6">
          <div>
            <Title>
              Categoria
            </Title>
            <div className="flex flex-col pl-6 gap-2">
              {
                categories.map((category) => (
                  <label key={crypto.randomUUID()} className="flex gap-2 items-center ">
                    <Checkbox />
                    <span>
                      {category.category_name}
                    </span>
                  </label>
                ))
              }
            </div>
          </div>
          <div>
            <Title>
              Marcas
            </Title>
            <div className="flex flex-col pl-6 gap-2">
              {
                brands.map((brand) => (
                  <label key={crypto.randomUUID()} className="flex gap-2 items-center ">
                    <Checkbox />
                    <span>
                      {brand.brand_name}
                    </span>
                  </label>
                ))
              }
            </div>
          </div>
          <div>
            <Title>
              Calificacion
            </Title>
            <div className="flex flex-col pl-6 gap-4">
              {
                Array.from({ length: 5 }).map((_, i) => (
                  <label key={crypto.randomUUID()} className="flex gap-2 items-center ">
                    <Checkbox />
                    <span>
                      <Rating rating={i + 1} />
                    </span>
                  </label>
                ))
              }
            </div>
          </div>
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
