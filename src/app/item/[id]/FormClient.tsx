'use client';

import { FormEventHandler } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function FormClient({ id }: { id: string }) {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const product_id = Number(id);
    const cart_count = Number(formData.get('cart_count'));

    const response = await fetch('/api/cart/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id,
        cart_count,
      }),
    });

    if (response.status === 200) {
      toast.success('Producto agregado al carrito');
    } else {
      toast.error('Error al agregar el producto al carrito');
    }
  };

  return (
    <form
      className="w-full justify-between flex max-w-md"
      onSubmit={handleSubmit}
    >
      <Select required name="cart_count" defaultValue="1">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Cantidad" />
        </SelectTrigger>
        <SelectContent>
          {
        Array.from({ length: 10 }, (_, index) => (
          <SelectItem key={index + 1} value={`${index + 1}`}>
            {index + 1}
          </SelectItem>
        ))
      }
        </SelectContent>
      </Select>
      <Button type="submit">
        Agregar al carrito
      </Button>
    </form>
  );
}
