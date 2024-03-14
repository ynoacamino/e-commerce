'use client';

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
import { useEffect, useState } from 'react';

export default function CarritoPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/cart/read', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => setCart(data));
  }, []);

  return (
    <div className="w-full flex flex-col my-10">
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
    </div>
  );
}
