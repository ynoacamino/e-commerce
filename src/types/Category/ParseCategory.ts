import { isString, isNumber } from '@/lib/parserTypes';
import { NewCategory, UpdateCategory } from './Category';

export const isNewCategory = (category: unknown): category is NewCategory => {
  if (category && typeof category === 'object') {
    if ('category_name' in category && 'category_description' in category) {
      return isString(category.category_name) && isString(category.category_description);
    }
    return false;
  }
  return false;
};

export const isUpdateCategory = (category: unknown): category is UpdateCategory => (
  isNewCategory(category)
    && 'category_id' in category
    && isNumber(category.category_id)
);
