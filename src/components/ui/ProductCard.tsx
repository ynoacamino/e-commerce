import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

type ProductCard = {
  product_image: string;
  product_name: string;
  product_price: number;
  product_id: number;
  brand_name: string;
};

export function CardH() {
  return (
    <Link href="/" className="max-w-96 md:max-w-none w-full flex flex-col md:flex-row flex-1 h-full">
      <Card className="max-w-96 md:max-w-none w-full flex flex-col md:flex-row">
        <Image
          alt="Card Image"
          src="https://res.cloudinary.com/dazt6g3o1/image/upload/v1707404432/u12uoxlhzpm927slfy24.png"
          height={300}
          width={300}
          className="aspect-square w-full md:max-w-60 object-cover border-b-[1px] md:border-r-[1px] md:border-b-0 border-border"
        />
        <div className="">
          <CardHeader className="sm:p-6 p-3">
            <CardTitle className="text-wrap text-base">
              Smartwatch HUAWEI Watch Fit 2 Rosado
            </CardTitle>
            <CardDescription>
              Brand Item
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">
              S/ 239
            </p>
            <p className="line-through">
              S/ 299
            </p>
          </CardContent>
        </div>
      </Card>
    </Link>

  );
}

export function CardV(
  {
    brand_name, product_id, product_image, product_name, product_price,
  }
  :
  ProductCard,
) {
  return (
    <Link href={`/item/${product_id}`} className="max-w-96 w-full">
      <Card className="max-w-96 w-full h-full">
        <Image
          alt="Card Image"
          src={product_image}
          height={300}
          width={300}
          className="w-full border-b-[1px] border-border aspect-square"
        />
        <CardHeader className="sm:p-6 p-3">
          <CardTitle className="text-wrap text-base">
            {product_name}
          </CardTitle>
          <CardDescription>
            {brand_name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold">
            S/
            {' '}
            {product_price}
          </p>
          <p className="line-through">
            S/
            {' '}
            {Math.round(product_price) + 10}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
