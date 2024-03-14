import { Session } from 'next-auth';

export const action = async (formData: FormData, session: Session | null) => {
  'use server';

  const product_id = Number(formData.get('product_id'));
  const quantity = Number(formData.get('quantity'));

  console.log({ session, product_id, quantity });
};
