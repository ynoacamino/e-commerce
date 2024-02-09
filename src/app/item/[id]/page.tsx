import Rating from '@/components/itemPage/Rating';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Link from '@/components/ui/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import FacebookIcon from '@/components/icons/FacebookIcon';
import WhatsappIcon from '@/components/icons/WhatsappIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';

export default function ItemPage({ params }: { params: { id: string } }) {
  const urlImage = 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1707492655/krtohudysrtpe8lbesre.jpg';
  const pages = [
    { url: '/', name: 'Home' },
    { url: '/item', name: 'Item' },
    { url: `/item/${params.id}`, name: params.id }];
  return (
    <>
      <div className="w-full justify-start items-center p-6 flex gap-4 ">
        <Link href="/" size="icon">
          <ArrowLeft />
        </Link>
        <Breadcrumb pags={pages} />
      </div>
      <div className="w-full flex-1 grid grid-cols-2 px-10">
        <div className="flex justify-center items-start">
          <Image
            src={urlImage}
            alt="Picture of the author"
            width={500}
            height={500}
            className="border-[1px] border-border"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-light">HUAWEI</p>
          <h1 className="mb-1 text-xl font-semibold tracking-tight w-full">
            Smartwatch HUAWEI Watch Fit 2 Rosado
          </h1>
          <Rating rating={4.5} count={90} />
          <span className="text-sm font-light">
            SKU: 1231023812
          </span>
          <span className="font-bold text-2xl my-5">
            S/. 72.50
          </span>
          <div className="w-full justify-between flex max-w-md">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Cantidad" />
              </SelectTrigger>
              <SelectContent>
                {
                Array.from({ length: 10 }, (_, index) => (
                  <SelectItem key={index} value={`${index + 1}`}>
                    {index + 1}
                  </SelectItem>
                ))
              }
              </SelectContent>
            </Select>
            <Button>
              Agregar al carrito
            </Button>
          </div>
          <p className="my-10 font-light w-full max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            ligula sit amet est fermentum consequat. Nullam nec fermentum
            sapien. Sed nec orci nec sapien tincidunt fermentum
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            ligula sit amet est fermentum consequat. Nullam nec fermentum
            sapien. Sed nec orci nec sapien tincidunt fermentum
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
