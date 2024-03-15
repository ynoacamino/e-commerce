'use client';

import { Button } from '@/components/ui/button';
import { Spiner } from '@/components/ui/spiner';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useRouter } from 'next/navigation';
import { useEffect, useState, MouseEventHandler } from 'react';
import { toast } from 'sonner';

export default function CarritoPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const { push } = useRouter();

  useEffect(() => {
    setLoading(true);
    fetch('/api/cart/read', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => setCart(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex flex-1 flex-col gap-4 items-center justify-center">
        <Spiner />
        Cargando...
      </div>
    );
  }

  const handlePay: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
      }).then((res) => res.json());

      if (response && response.init_point) {
        push(response.init_point);
      }
    } catch (error) {
      toast.error('Error al pagar');
    }
  };

  return (
    <div className="w-full flex flex-col my-10 flex-1">
      <Table>
        <TableCaption>Lista de ventas</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">ID del usuario</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="w-[80px]">ID del producto</TableHead>
            <TableHead>Nombre del producto</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Cantidad</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.map(({
            product, user, cart_count,
          }) => (
            <TableRow key={crypto.randomUUID()}>
              <TableCell className="font-medium">{user.user_id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{product.product_id}</TableCell>
              <TableCell>{product.product_name}</TableCell>
              <TableCell>{product.product_price}</TableCell>
              <TableCell>{cart_count}</TableCell>
              <TableCell>{product.product_price * cart_count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}>Numero de ventas</TableCell>
            <TableCell className="text-center">{cart.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="w-full flex flex-col justify-center items-center gap-4 flex-1">
        <h2 className="text-3xl font-bold">
          Pagar
        </h2>
        <Button
          className="w-full max-w-lg"
          onClick={handlePay}
        >
          Pagar
        </Button>
      </div>
    </div>
  );
}
