import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons';
import { OptionMenu } from '@/components/ui/menu';
import H1 from '@/components/ui/H1';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { CardV } from '../ui/ProductCard';

export default function Categorys() {
  const options: OptionMenu[] = [
    {
      Icon: FaceIcon,
      name: 'Populares',
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
    {
      Icon: ImageIcon,
      name: 'Hot Sale',
      href: '/hot-sale',
      isSelect: false,
    },
  ];
  return (
    <div className="w-full flex flex-col justify-start items-center py-10 border-b-[1px] border-border">
      <H1>
        Categorys
      </H1>

      <Tabs defaultValue="Populares" className="flex flex-col items-center justify-center">
        <TabsList className="">
          {
            options.map(({ name }) => (
              <TabsTrigger key={name} value={name}>{name}</TabsTrigger>
            ))
          }
        </TabsList>
        {
          options.map(({ name }) => (
            <TabsContent key={name} value={name}>
              <div className="grid gap-4 p-4 md:grid-cols-4 grid-cols-2">
                {
                  Array.from({ length: 4 }).map(() => (
                    <CardV key={crypto.randomUUID()} />
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
