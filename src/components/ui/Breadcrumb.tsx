'use client';

import Link from '@/components/ui/link';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './button';

export default function Breadcrumb({ pags }: { pags: { url: string, name: string }[] }) {
  const { back } = useRouter();
  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => back()}>
        <ArrowLeft />
      </Button>
      <div className="flex gap-2 items-center">
        {
      pags.map(({ name, url }, index) => {
        if (index !== pags.length - 1) {
          return (
            <div key={crypto.randomUUID()} className="flex gap-2 items-center justify-start">
              <Link href={url} className="dark:text-zinc-400 text-zinc-600">
                {name}
              </Link>
              <ChevronRight className="h-4 w-4" />
            </div>
          );
        }
        return <span key={url}>{name}</span>;
      })
      }
      </div>
    </>
  );
}
