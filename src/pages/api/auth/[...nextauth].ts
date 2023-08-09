import NextAuth from 'next-auth';

import { providers } from '@/api/auth/providers';
import { NEXTAUTH_SECRET } from '@/config';

export default NextAuth({
  callbacks: {
    session: async ({ session, token: { user } }): Promise<any> => {
      return { ...session, user };
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }

      return token;
    },
  },
  providers,
  secret: NEXTAUTH_SECRET,
});
