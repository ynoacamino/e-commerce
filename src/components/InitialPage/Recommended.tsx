import { CardV } from '@/components/ui/ProductCard';
import { type PopultedProduct } from '@/types/Product/Product';
import H1 from '../ui/H1';

const getProducts = async () => {
  const products = await fetch('http://localhost:3000/api/product/read', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      limit: 4,
    }),
  }).then((res) => res.json());

  return products as Promise<PopultedProduct[]>;
};

export default async function Recommended() {
  const data = await getProducts();
  return (
    <div className="w-full flex flex-col justify-start items-center py-10 border-b-[1px] border-border md:flex">
      <H1>Recomendaciones</H1>
      <div className="grid gap-4 p-4 md:grid-cols-4 grid-cols-2">
        {
          data.map(({
            brand, product_image, product_name, product_price, product_id,
          }) => (
            <CardV
              key={crypto.randomUUID()}
              brand_name={brand.brand_name}
              product_id={product_id}
              product_image={product_image}
              product_name={product_name}
              product_price={product_price}
            />
          ))
        }
      </div>
    </div>
  );
}
