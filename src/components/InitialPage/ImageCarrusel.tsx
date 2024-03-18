import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function ImageCarrusel() {
  const IMAGES = [
    'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710788431/clelpghrypu6o4jra06k.jpg',
    'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710788352/efjtuwwg40xljwsq20tb.jpg',
    'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710788378/o74thyxvp1h7uhho7xxz.jpg',
    'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710788394/puhqfzquitsxiqczmnxi.jpg',
    'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710788404/mh1az3a5jysftzv8enqp.jpg',
    'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710788417/ltykbztvbvbi65vjcxnc.jpg',
  ];

  return (
    <div className="w-full px-20 pb-5 border-b-[1px] border-border">
      <Carousel className="w-full">
        <CarouselContent>
          {IMAGES.map((img) => (
            <CarouselItem key={crypto.randomUUID()}>
              <div className="p-1">
                <Card className="flex rounded-lg overflow-hidden">
                  <Image
                    className="flex aspect-square w-1/2"
                    width={600}
                    height={600}
                    src={img}
                    alt=""
                  />
                  <Image
                    className="flex aspect-square w-1/2"
                    width={600}
                    height={600}
                    src={img}
                    alt=""
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
