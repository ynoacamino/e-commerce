import Title from '@/components/ui/title';
import { IconType } from '@/lib/types';
import Link from './link';

export type OptionMenu = {
  Icon?: IconType,
  name: string,
  isSelect?: boolean,
  href: string,
};

export default function Menu({ title, options }: { title: string, options: OptionMenu[] }) {
  return (
    <div className="flex flex-col">
      <Title>
        {title}
      </Title>
      <div className="flex flex-col gap-[2px]">
        {
          options.map(({
            Icon, name, isSelect, href,
          }) => (
            <Link key={name} href={href} isSelect={isSelect} className="justify-start">
              {
                Icon && <Icon className="h-[1.2rem] w-[1.2rem] mr-4" />
              }
              <span className="flex-1 overflow-hidden">
                {name}
              </span>
            </Link>
          ))
        }
      </div>
    </div>
  );
}
