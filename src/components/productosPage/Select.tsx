import {
  Select as SelectComponent,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import Link from 'next/link';

function SelectItem({ children, value }: { children: React.ReactNode, value: string }) {
  return (
    <Link
      href={`/productos/?orderBy=${value}`}
      className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    >
      {children}
    </Link>
  );
}

const ORDERS = [
  {
    name: 'Menor precio',
    value: 'lower-price',
  },
  {
    name: 'Mayor precio',
    value: 'higher-price',
  },
  {
    name: 'Marca',
    value: 'brand',
  },
  {
    name: 'Mejores evaluados',
    value: 'rating',
  },
  {
    name: 'Nuevos productos',
    value: 'new-products',
  },
];

export default function Select() {
  return (
    <SelectComponent>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Ordenar por" />
      </SelectTrigger>
      <SelectContent>
        {
          ORDERS.map((order) => (
            <SelectItem
              key={order.value}
              value={order.value}
            >
              {order.name}
            </SelectItem>
          ))
        }
      </SelectContent>
    </SelectComponent>
  );
}
