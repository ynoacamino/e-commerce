import { AuthOptions, Session } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

import { prisma } from '@/lib/prisma';
import { parserUser } from '@/lib/user';

type UserSession = Session & { user : { user_id: number } };

export const authOptions: AuthOptions = {
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
    session: async ({ session }): Promise<UserSession> => {
      const userSession = session as UserSession;

      if (!parserUser(userSession.user)) {
        throw new Error('Invalid user');
      }

      const user = await prisma.user.findUnique({
        where: {
          email: userSession.user.email,
        },
      });

      if (user) {
        userSession.user.user_id = user.user_id;
        return userSession;
      }

      const newUser = await prisma.user.create({
        data: {
          email: userSession.user.email,
          name: userSession.user.name,
          image: userSession.user.image,
        },
      });

      userSession.user.user_id = newUser.user_id;

      return userSession;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
