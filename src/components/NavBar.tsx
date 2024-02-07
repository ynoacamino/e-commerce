import {
  ShadowNoneIcon, MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import MenubarDemo from './test';
import { Button } from './ui/button';

export default function NavBar() {
  return (
    <header className="w-full flex justify-center items-center p-3 border-[1px] border-border">
      <div className="w-full max-w-7xl flex justify-between items-center">
        <h1 className="flex gap-3 items-center justify-center">
          <ShadowNoneIcon className="font-bold w-9 h-9" />
          <span className="text-xl font-semibold tracking-tight w-full">My site</span>
        </h1>
        <nav className="flex gap-4">
          <Button variant="outline" size="sm" className="text-zinc-500 justify-start">
            <MagnifyingGlassIcon className="w-5 h-5 mr-4" />
            <span className="min-w-32 text-start">
              Search product...
            </span>
          </Button>
          <MenubarDemo />
        </nav>
      </div>
    </header>
  );
}
