import { User } from '@prisma/client';
import { isString } from './parserTypes';

export const parserUser = (user: any): user is User => {
  if (!user || typeof user !== 'object') return false;

  if ('email' in user && 'name' in user) {
    return isString(user.email) && isString(user.name);
  }

  return false;
};
