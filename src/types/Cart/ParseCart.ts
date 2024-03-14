import { isNumber } from '@/lib/parserTypes';
import { NewCart, UpdateCart } from './Cart';

export const isNewCart = (newCart: unknown): newCart is NewCart => {
  if (
    !!newCart
    && typeof newCart === 'object'
    && 'cart_count' in newCart
    && 'product_id' in newCart
  ) {
    return (
      isNumber(newCart.cart_count)
      && isNumber(newCart.product_id)
    );
  }
  return false;
};

export const isUpdateCart = (updateCart: any): updateCart is UpdateCart => isNewCart(updateCart);
