import { isNumber } from '@/lib/parserTypes';
import { NewCart, UpdateCart } from './Cart';

export const isNewCart = (newCart: any): newCart is NewCart => {
  if (
    !!newCart
    && typeof newCart === 'object'
    && 'cart_count' in newCart
    && 'product_id' in newCart
    && 'user_id' in newCart
  ) {
    return (
      isNumber(newCart.cart_count)
      && isNumber(newCart.product_id)
      && isNumber(newCart.user_id)
    );
  }
  return false;
};

export const isUpdateCart = (updateCart: any): updateCart is UpdateCart => isNewCart(updateCart);
