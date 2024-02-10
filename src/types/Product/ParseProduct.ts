import { isNumber, isString } from '@/lib/parserTypes';
import { isDate } from 'util/types';
import { NewProduct, ProductFilterQuery, UpdateProduct } from './Product';

export function isNewProduct(product: unknown): product is NewProduct {
  if (product && typeof product === 'object') {
    if ('category_id' in product
      && 'brand_id' in product
      && 'product_date' in product
      && 'product_description' in product
      && 'product_image' in product
      && 'product_name' in product
      && 'product_price' in product
      && 'product_stock' in product
      && 'tags' in product
    ) {
      return (
        isNumber(product.category_id)
        && isNumber(product.brand_id)
        && isString(product.product_image)
        && isString(product.product_name)
        && isString(product.product_description)
        && isNumber(product.product_price)
        && isNumber(product.product_stock)
        && Array.isArray(product.tags)
        && product.tags.every(isNumber)
        && isDate(product.product_date)
      );
    }
    return false;
  }
  return false;
}

export const isFilterQuery = (query: unknown): query is ProductFilterQuery => {
  if (typeof query !== 'object' || query === null) {
    return false;
  }

  const {
    price, rate, brand_id, category_id,
  } = query as ProductFilterQuery;

  if (price && !Array.isArray(price)) {
    return false;
  }

  if (rate && !Array.isArray(rate)) {
    return false;
  }

  if (brand_id && !Array.isArray(brand_id)) {
    return false;
  }

  if (category_id && !Array.isArray(category_id)) {
    return false;
  }

  return true;
};

export const isUpdateProduct = (product: unknown): product is UpdateProduct => (
  isNewProduct(product)
    && 'product_id' in product
    && isNumber(product.product_id)
);
