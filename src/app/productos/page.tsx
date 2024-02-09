// import { useSearchParams } from 'next/navigation';
import { Checkbox } from '@/components/ui/checkbox';
import Title from '@/components/ui/title';
import { CardV } from '@/components/ui/ProductCard';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default function CategoriaPage() {
  return (
    <div className="w-full flex">
      <div className="max-w-52 w-full border-r-[1px] border-border pl-8 py-10">
        <h2 className="text-3xl font-bold mb-2">
          Filtros
        </h2>
        <form className="flex flex-col gap-6">
          {
            Array.from({ length: 5 }).map(() => (
              <div key={crypto.randomUUID()}>
                <Title>
                  Categoria
                </Title>
                <div className="flex flex-col pl-6 gap-2">
                  <label className="flex gap-2 items-center ">
                    <Checkbox />
                    <span>
                      Accept
                    </span>
                  </label>
                  <label className="flex gap-2 items-center ">
                    <Checkbox />
                    <span>
                      Accept
                    </span>
                  </label>
                  <label className="flex gap-2 items-center ">
                    <Checkbox />
                    <span>
                      Accept
                    </span>
                  </label>
                </div>
              </div>
            ))
          }
        </form>
      </div>
      <div className="flex flex-col flex-1">
        <div className="w-full flex py-4 px-6 items-center justify-between border-b-[1px] border-border">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Menor precio</SelectItem>
              <SelectItem value="dark">Mayor precio</SelectItem>
              <SelectItem value="system">Marca</SelectItem>
              <SelectItem value="system">Mejores evaluados</SelectItem>
              <SelectItem value="system">Nuevos productos</SelectItem>
            </SelectContent>
          </Select>
          <Pagination className="w-auto mx-0">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        <div className="w-full grid gap-4 p-4 md:grid-cols-4 grid-cols-2">
          {
            Array.from({ length: 30 }).map(() => (
              <CardV key={crypto.randomUUID()} />
            ))
          }
        </div>
        <Pagination className="my-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
