import H1 from '@/components/ui/H1';
import { CardV } from '@/components/ui/ProductCard';

export default function HotSale() {
  return (
    <div className="w-full flex flex-col justify-start items-center py-10 border-b-[1px] border-border md:flex">
      <H1>Hot Sale</H1>
      <div className="grid gap-4 p-4 md:grid-cols-3 grid-cols-2">
        <CardV />
        <CardV />
        <CardV />
      </div>
    </div>
  );
}
