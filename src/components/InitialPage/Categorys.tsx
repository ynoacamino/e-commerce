import H1 from '@/components/ui/H1';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { PopultedProduct } from '@/types/Product/Product';
import { CardV } from '../ui/ProductCard';

const getProducts = async () => {
  try {
    const products = [2, 3, 4, 5].map((id) => fetch(`${process.env.URL_API}/api/product/read`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category_id: [id],
        limit: 4,
      }),
    }).then((res) => res.json()));

    return await (Promise.all(products) as Promise<PopultedProduct[][]>);
  } catch (error) {
    return null;
  }
};

export default async function Categorys() {
  const data = await getProducts();

  if (!data) return <h1>Productos no encontrados</h1>;

  return (
    <div className="w-full flex flex-col justify-start items-center py-10 border-b-[1px] border-border">
      <H1>
        Categorias
      </H1>

      <Tabs defaultValue={String(data[0][0].category_id)} className="flex flex-col items-center justify-center">
        <TabsList className="">
          {
            data.map((category) => (
              <TabsTrigger
                key={crypto.randomUUID()}
                value={String(category[0].category_id)}
              >
                {category[0].category.category_name}
              </TabsTrigger>
            ))
          }
        </TabsList>
        {
          data.map((category) => (
            <TabsContent key={crypto.randomUUID()} value={String(category[0].category_id)}>
              <div className="grid gap-4 p-4 md:grid-cols-4 grid-cols-2">
                {
                  category.map(({
                    brand, product_id, product_name, product_price, product_image,
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
            </TabsContent>
          ))
        }
      </Tabs>
    </div>
  );
}
