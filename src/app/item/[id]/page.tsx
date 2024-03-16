import Rating from '@/components/itemPage/Rating';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Link from '@/components/ui/link';
import Image from 'next/image';

import FacebookIcon from '@/components/icons/FacebookIcon';
import WhatsappIcon from '@/components/icons/WhatsappIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import { PopultedProduct } from '@/types/Product/Product';
import FormClient from './FormClient';

const getProduct = async (id: string) => {
  const product_id = Number(id);

  try {
    const product = await fetch(`${process.env.URL_API}/api/product/read`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id,
      }),
    }).then((res) => res.json());

    return product as PopultedProduct;
  } catch (error) {
    return null;
  }
};

export default async function ItemPage({ params }: { params: { id: string } }) {
  const data = await getProduct(params.id);

  const pages = [
    { url: '/', name: 'Home' },
    { url: '/item', name: 'Product' },
    { url: `/item/${params.id}`, name: params.id },
  ];

  if (!data) return <h1>Producto no encontrado</h1>;
  return (
    <>
      <div className="w-full justify-start items-center p-6 flex gap-4 ">
        <Breadcrumb pags={pages} />
      </div>
      <div className="w-full flex-1 grid grid-cols-2 px-10">
        <div className="flex justify-center items-start">
          <Image
            src={data.product_image}
            alt="Picture of the author"
            width={500}
            height={500}
            className="border-[1px] border-border aspect-square"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-light">{data.brand.brand_name}</p>
          <h1 className="mb-1 text-xl font-semibold tracking-tight w-full">
            {data.product_name}
          </h1>
          <Rating rating={data.rating.rating_rate} count={data.rating.rating_count} />
          <span className="text-sm font-light">
            SKU:
            {' '}
            {data.product_id}
          </span>
          <span className="font-bold text-2xl my-5">
            S/.
            {' '}
            {data.product_price.toFixed(2)}
          </span>
          <FormClient id={params.id} />
          <p className="my-10 font-light w-full max-w-md">
            {data.product_description}
          </p>
          <div>
            <h2 className="mb-1 text-xl font-semibold tracking-tight w-full">
              Compartir
            </h2>
            <div className="flex gap-2 items-center ml-1">
              <Link href="/" size="icon">
                <FacebookIcon className="p-0.5" />
              </Link>
              <Link href="/" size="icon">
                <WhatsappIcon className="p-0.5" />
              </Link>
              <Link href="/" size="icon">
                <TwitterIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
