import { CardV } from '@/components/ui/ProductCard';
import H1 from '../ui/H1';

export default function Recommended() {
  return (
    <div className="w-full flex flex-col justify-start items-center py-10 border-b-[1px] border-border md:flex">
      <H1>Recomendaciones</H1>
      <div className="grid gap-4 p-4 md:grid-cols-4 grid-cols-2">
        {
          Array.from({ length: 4 }).map(() => (
            <CardV key={crypto.randomUUID()} />
          ))
        }
      </div>
    </div>
  );
}
