import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons';
import Menu, { OptionMenu } from '@/components/ui/menu';
import NavBar from '@/components/NavBar';

export default function Home() {
  const options: OptionMenu[] = [
    {
      Icon: FaceIcon,
      name: 'Categorías Populares',
      href: '/categoriasPopulares',
      isSelect: false,
    },
    {
      Icon: ImageIcon,
      name: 'Gallery',
      href: '/gallery',
      isSelect: false,
    },
    {
      Icon: SunIcon,
      name: 'Settings',
      href: '/settings',
      isSelect: false,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full">
      <NavBar />
      <div className="w-full flex max-w-7xl flex-1">
        <div className="max-w-[16rem] w-full flex flex-col gap-6 py-8 border-r-[1px] border-border">
          <Menu
            title="Categorías Populares"
            options={options}
          />
          <Menu
            options={options}
            title="Discover"
          />
          <Menu
            options={options}
            title="Discover"
          />
        </div>
        <div className="w-full flex-1 bg-accent" />
      </div>
    </main>
  );
}
