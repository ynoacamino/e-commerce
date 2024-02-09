import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

import { prisma } from '@/lib/prisma';
import { parserUser } from '@/lib/user';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
  callbacks: {
    session: async ({ session }) => {
      const userSession = session.user;

      if (!parserUser(userSession)) {
        throw new Error('Invalid user');
      }

      const user = await prisma.user.findUnique({
        where: {
          email: userSession.email,
        },
      });

      if (user) {
        return session;
      }

      await prisma.user.create({
        data: {
          email: userSession.email,
          name: userSession.name,
          image: userSession.image,
        },
      });

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
