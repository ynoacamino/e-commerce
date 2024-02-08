import Categorys from '@/components/InitialPage/Categorys';
import HotSale from '@/components/InitialPage/HotSale';
import ImageCarrusel from '@/components/InitialPage/ImageCarrusel';
import Present from '@/components/InitialPage/Present';
import Recommended from '@/components/InitialPage/Recommended';
import Subscribe from '@/components/InitialPage/Suscribe';

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-start items-center max-w-7xl flex-1 ">
      <Present />
      <ImageCarrusel />
      <Categorys />
      <HotSale />
      <Recommended />
      <Subscribe />
    </div>
  );
}
