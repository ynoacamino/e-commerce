import {
  ShadowNoneIcon, CardStackMinusIcon,
} from '@radix-ui/react-icons';
import SearchModal from '@/components/SearchModal';
import OptionsBar from '@/components/OptionsBar';
import Link from 'next/link';
import MenubarDemo from './test';
import { Button } from './ui/button';

export default function NavBar() {
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
          <OptionsBar />
        </div>
        <div className="flex gap-4">
          <SearchModal />
          <Button variant="ghost" size="icon">
            <CardStackMinusIcon className="w-6 h-6" />
          </Button>
          <MenubarDemo />
        </div>
      </div>
    </header>
  );
}
