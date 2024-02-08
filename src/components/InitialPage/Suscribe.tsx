import Image from 'next/image';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function Subscribe() {
  return (
    <div className="w-full flex justify-start items-center border-b-[1px] border-border md:flex">
      <form>
        <label className="flex flex-col justify-center items-center px-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            ¡REGÍSTRATE Y RECIBE OFERTAS EXCLUSIVAS!
          </h2>
          <div className="flex gap-4">
            <Input className="max-w-sm" />
            <Button type="submit">Subscribe</Button>
          </div>
        </label>
      </form>
      <Image
        alt="Present Image"
        src="https://res.cloudinary.com/dazt6g3o1/image/upload/v1707358763/oniheih1dqv8xzrgpgkm.png"
        width={800}
        height={500}
        className="border-l-[1px] border-border w-full md:max-w-lg"
      />
    </div>
  );
}
