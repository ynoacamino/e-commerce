import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default function Pagination({
  className = '',
  page,
  total,
}: {
  className?: string
  page: number
  total: number
}) {
  return (
    <PaginationComponent className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`/productos?page=${page === 1 ? page : page - 1}`} isDisabled={page === 1} />
        </PaginationItem>
        {
          Array.from({ length: total }).map((_, index) => (
            <PaginationItem key={crypto.randomUUID()}>
              <PaginationLink href={`/productos?page=${index + 1}`} isActive={page === index + 1}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))
        }
        <PaginationItem>
          <PaginationNext href={`/productos?page=${page === total ? page : page + 1}`} isDisabled={page === total} />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  );
}
