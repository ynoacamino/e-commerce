/* eslint-disable no-console */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-restricted-exports */
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware() {},
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (
          (
            req.nextUrl.pathname.startsWith('/api/cart')
            || req.nextUrl.pathname.startsWith('/carrito-de-compras')
            || req.nextUrl.pathname.startsWith('/checkout')
            || req.nextUrl.pathname.startsWith('/api/order')
            || req.nextUrl.pathname.startsWith('/api/user')
          )
          && token === null
        ) {
          return false;
        }
        return true;
      },
    },
  },
);
