import { isNumber, isString } from '@/lib/parserTypes';
import { NewBrand, UpdateBrand } from './Brand';

export const isNewBrand = (newBrand: any): newBrand is NewBrand => (
  !!newBrand
  && 'brand_name' in newBrand
  && isString(newBrand.brand_name)
);

export const isUpdateBrand = (updateBrand: any): updateBrand is UpdateBrand => (
  isNewBrand(updateBrand)
  && 'brand_id' in updateBrand
  && isNumber(updateBrand.brand_id)
);
