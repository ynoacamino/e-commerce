import {
  ShadowNoneIcon,
} from '@radix-ui/react-icons';
import SearchModal from '@/components/SearchModal';
import OptionsBar from '@/components/OptionsBar';
import Link from 'next/link';
import { Category } from '@prisma/client';
import { getServerSession } from 'next-auth';
import ButtonLink from '@/components/ui/link';
import { ShoppingCart, ShoppingBag } from 'lucide-react';
import MenubarDemo from './test';

const getCategorys = async () => {
  const categorys = await fetch(`${process.env.URL_API}/api/category/read`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  }).then((res) => res.json());

  return categorys as Category[];
};

export default async function NavBar() {
  const data = await getCategorys();
  const session = await getServerSession();
  return (
    <header className="w-full flex justify-center items-center p-3 border-[1px] border-border sticky top-0 bg-background z-20">
      <div className="w-full max-w-7xl flex justify-between items-center">
        <div className="flex gap-4 justify-center items-center">
          <Link href="/" className="">
            <h1 className="flex gap-3 items-center justify-center">
              <ShadowNoneIcon className="font-bold w-9 h-9" />
              <span className="text-xl font-semibold tracking-tight w-full">My site</span>
            </h1>
          </Link>
          <OptionsBar categorys={data} />
        </div>
        <div className="flex gap-4">
          <SearchModal />
          <ButtonLink href="/pagos" size="icon">
            <ShoppingBag className="w-6 h-6" />
          </ButtonLink>
          <ButtonLink href="/carrito-de-compras" size="icon">
            <ShoppingCart className="w-6 h-6" />
          </ButtonLink>
          <MenubarDemo session={session} />
        </div>
      </div>
    </header>
  );
}
