import CredentialsProvider from 'next-auth/providers/credentials';

export type LoginResponse = {
  id: string;
  access_token: string;
  user: User;
};

export type User = {
  version: number;
  id: string;
  username: string;
  refresh_token: {
    id: string;
    eat: string;
  };
  iat: number;
  exp: number;
};

export const credentialsProvider = CredentialsProvider({
  name: 'credentials',
  credentials: {
    identifier: { label: 'username', type: 'email' },
    password: { label: 'Password', type: 'password' },
  },
  authorize: async (credentials) => {
    if (credentials?.identifier) {
      try {
        // const body = {
        //   username: credentials.identifier,
        //   password: credentials.password,
        // };
        //const loginResponse: LoginResponse = await axios.unauthorized().post('auth/login', body);

        const loginResponse: LoginResponse = {
          access_token: '123',
          id: '12345678',
          user: {
            version: 1,
            username: 'teste',
            exp: 7 * 24 * 60 * 60,
            iat: 7 * 24 * 60 * 60,
            id: '12345678',
            refresh_token: {
              eat: '',
              id: '12345678',
            },
          },
        };

        if (!loginResponse.access_token)
          throw new Error('Ocorreu um erro. Tente novamente mais tarde.');

        return {
          ...loginResponse,
        };
      } catch {
        throw new Error('Erro ao efetuar o login.');
      }
    }
    throw new Error('Falha na autenticação');
  },
});
