import { Flex, Grid, GridItem, useToast, Text } from '@chakra-ui/react';
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
    <Flex flexDir="column" alignItems="center" gap="3rem" marginTop="2rem">
      <Grid templateColumns="repeat(4, 1fr)" w="100%">
        <GridItem colSpan={1}>
          <ReturnButton />
        </GridItem>
        <GridItem colSpan={2} display="flex" alignItems="center" justifyContent="center">
          <Text fontWeight="bold" fontSize="lg">
            Login
          </Text>
        </GridItem>
        <GridItem />
      </Grid>
      <Flex flexDir="column" w="100%" justifyContent="center" gap="1rem">
        <TextInput label="E-mail" placeholder="Digite seu e-mail" borderRadius="md" />
        <TextInput label="Senha" placeholder="Digite a sua senha" borderRadius="md" />
        <LoginButton
          label="Entrar"
          borderRadius="md"
          width="5rem"
          onClick={handleLogin}
          alignSelf="flex-end"
        />
      </Flex>
      <ClickableText text="Ainda não está cadastrado? Cadastre-se aqui" href="/futes" />
    </Flex>
  );
};
