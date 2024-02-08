import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export function CardH() {
  return (
    <Link href="/" className="max-w-96 md:max-w-none w-full flex flex-col md:flex-row flex-1">
      <Card className="max-w-96 md:max-w-none w-full flex flex-col md:flex-row">
        <Image
          alt="Card Image"
          src="https://res.cloudinary.com/dazt6g3o1/image/upload/v1707404432/u12uoxlhzpm927slfy24.png"
          height={300}
          width={300}
          className="aspect-square w-full md:max-w-60 object-cover border-b-[1px] md:border-r-[1px] md:border-b-0 border-border"
        />
        <div className="min-w-min">
          <CardHeader>
            <CardTitle className="text-wrap">
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

export function CardV() {
  return (
    <Link href="/" className="max-w-96 w-full">
      <Card className="max-w-96 w-full h-full">
        <Image
          alt="Card Image"
          src="https://res.cloudinary.com/dazt6g3o1/image/upload/v1707404432/u12uoxlhzpm927slfy24.png"
          height={300}
          width={300}
          className="w-full border-b-[1px] border-border aspect-square object-cover"
        />
        <CardHeader>
          <CardTitle className="text-wrap">
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
      </Card>
    </Link>
  );
}
