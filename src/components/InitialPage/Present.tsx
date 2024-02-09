import Image from 'next/image';

export default function Present() {
  return (
    <div className="flex w-full justify-center items-center md:flex-row pb-5 md:pb-0 flex-col mb-5 border-b-[1px] border-border">
      <Image
        alt="Present Image"
        src="https://res.cloudinary.com/dazt6g3o1/image/upload/v1707358763/oniheih1dqv8xzrgpgkm.png"
        width={800}
        height={500}
        className="border-r-[1px] border-border w-full md:max-w-2xl"
      />
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-5xl my-5 px-5 font-bold text-center">Bienvenido</h1>
        <p className="text-lg px-5 font-semibold text-center text-zinc-600">
          Nosotros tenemos los mejores productos para ti.
        </p>
        <p className="text-lg px-5 font-semibold text-center text-zinc-600 max-w-lg">
          Ven y descubre la mejor calidad en productos para ti y tu familia.
        </p>
      </div>
    </div>
  );
}
