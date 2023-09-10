import { Flex, Box, Heading, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { getSession, signIn } from 'next-auth/react';

import { ClickableText } from '@/components/ClickableText/ClickableText';
import { LoginButton } from '@/components/LoginButton';
import { ReturnButton } from '@/components/ReturnButton';
import { TextInput } from '@/components/TextInput';
import { cookies } from '@/utils';

export const Login = () => {
  const { push } = useRouter();
  const toast = useToast();

  const handleLogin = async () => {
    const result = await signIn('credentials', {
      redirect: false,
      identifier: 'teste@gmail.com',
      password: '12345678',
    });
    if (result?.status == 200) {
      const session: any = await getSession();
      cookies.setAccess(session?.user.access_token);
      await push('/admin');
    } else {
      toast({
        title: 'Usuário ou senha incorreta.',
        duration: 3000,
        isClosable: true,
        status: 'error',
      });
    }
  };

  return (
    <Flex flexDir="column">
      <Flex marginTop="3.75rem">
        <Box>
          <ReturnButton />
        </Box>
        <Flex
          w="100%"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          color="black"
          paddingRight="5rem"
        >
          <Heading fontSize="xl">Login</Heading>
        </Flex>
      </Flex>
      <Flex flexDir="column" w="100%" justifyContent="center">
        <TextInput label="E-mail" placeholder="Digite seu e-mail" borderRadius="md" />

        <TextInput label="Senha" placeholder="Digite a sua senha" borderRadius="md" />

        <LoginButton
          label="Entrar"
          borderRadius="md"
          width="5rem"
          marginLeft="7.75rem"
          onClick={handleLogin}
        />

        <ClickableText text="Ainda não está cadastrado? Cadastre-se aqui" href="/futes" />
      </Flex>
    </Flex>
  );
};
