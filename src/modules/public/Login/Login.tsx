import { Flex, Grid, GridItem, useToast, Text } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { getSession, signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';

import { CButton } from '@/components/CButton';
import { ClickableText } from '@/components/ClickableText/ClickableText';
import { InputTextField } from '@/components/InputTextField';
import { ReturnButton } from '@/components/ReturnButton';
import { cookies } from '@/utils';

import { validator } from './utils/validator';

type LoginFormType = {
  username: string;
  password: string;
};

export const Login = () => {
  const { push } = useRouter();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    mode: 'onChange',
    resolver: yupResolver(validator),
  });

  const handleLogin = async ({ username, password }: LoginFormType) => {
    const result = await signIn('credentials', {
      redirect: false,
      identifier: username,
      password,
    });
    if (result?.status == 200) {
      const session: any = await getSession();
      cookies.setAccess(session?.user.access_token);
      const footyUsername = session.user?.name;
      await push(`/admin/${footyUsername}`);
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
    <Flex
      as="form"
      onSubmit={handleSubmit(handleLogin)}
      flexDir="column"
      alignItems="center"
      gap="3rem"
      marginTop="2rem"
    >
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
        <InputTextField
          label="Nome de usuário"
          placeholder="Digite seu nome"
          borderRadius="md"
          errorMessage={errors?.username?.message}
          {...register('username')}
        />
        <InputTextField
          label="Senha"
          type="password"
          placeholder="Digite a sua senha"
          borderRadius="md"
          errorMessage={errors?.password?.message}
          {...register('password')}
        />
        <CButton type="submit" label="Entrar" borderRadius="md" width="5rem" alignSelf="flex-end" />
      </Flex>
      <ClickableText text="Ainda não está cadastrado? Cadastre-se aqui" href="/cadastrar" />
    </Flex>
  );
};
