import H1 from '@/components/ui/H1';
import { CardH, CardV } from '@/components/ui/ProductCard';

export default function HotSale() {
  return (
    <div className="w-full flex flex-col justify-start items-center py-10 border-b-[1px] border-border md:flex">
      <H1>Hot Sale</H1>
      <div className="flex flex-col-reverse md:flex-row gap-4 p-4 items-center">
        <CardV />
        <div className="flex flex-col sm:flex-row md:flex-col gap-4 h-full min-w-[450px] items-center">
          <CardH />
          <CardH />
        </div>
      </div>
    </div>
  );
}
