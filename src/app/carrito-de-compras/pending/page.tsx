import { ServerCrash } from 'lucide-react';

export default function PendingPage() {
  return (
    <div className="w-full flex-1 h-full flex flex-col gap-6 items-center justify-center">
      <h1 className="text-6xl font-bold text-center">Pending</h1>
      <ServerCrash className="w-40 h-40" />
      <p className="text-center text-xl w-full max-w-md">
        Something went wrong with your payment, please try again or contact us
      </p>
      <p className="text-center text-xl w-full max-w-md">
        Algo salió mal con tu pago, por favor intenta de nuevo o contactanos
      </p>
    </div>
  );
}
