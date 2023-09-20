import CredentialsProvider from 'next-auth/providers/credentials';

import { postAuth } from '..';

export const credentialsProvider = CredentialsProvider({
  name: 'credentials',
  credentials: {
    identifier: { label: 'username', type: 'email' },
    password: { label: 'Password', type: 'password' },
  },
  authorize: async (credentials) => {
    if (credentials?.identifier) {
      try {
        const body = {
          username: credentials.identifier,
          password: credentials.password,
        };

        const { data } = await postAuth({ body });

        if (!data.access_token) throw new Error('Ocorreu um erro. Tente novamente mais tarde.');

        return {
          ...data,
        };
      } catch (error) {
        console.log(error);
        throw new Error('Erro ao efetuar o login.');
      }
    }
    throw new Error('Falha na autenticação');
  },
});
