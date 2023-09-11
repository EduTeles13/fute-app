import { Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

import { InputTextField } from '@/components/InputTextField';
import { LoginButton } from '@/components/LoginButton';
import { ReturnButton } from '@/components/ReturnButton';

import { validator } from './validator';

type RegisterFormType = {
  email: string;
  peladaName: string;
  password: string;
  confirmPassword: string;
};

export const Credentials = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    mode: 'onChange',
    resolver: yupResolver(validator),
  });

  const router = useRouter();

  const submitRegister = (data: RegisterFormType) => {
    router.push('/cadastrar/informacoes-pelada');
    console.log(data);
  };

  return (
    <Flex flexDir="column" gap="3rem" mt="2rem" as="form" onSubmit={handleSubmit(submitRegister)}>
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem colSpan={1}>
          <ReturnButton />
        </GridItem>
        <GridItem colSpan={2} display="flex" alignItems="center" justifyContent="center">
          <Text fontWeight="bold" fontSize="lg">
            Cadastro de Pelada
          </Text>
        </GridItem>
        <GridItem />
      </Grid>
      <Flex flexDir="column" justifyContent="space-between" gap="1rem" px="1rem">
        <InputTextField
          errorMessage={errors?.email?.message}
          type="text"
          label="E-mail"
          {...register('email')}
        />
        <InputTextField
          errorMessage={errors?.peladaName?.message}
          type="text"
          label="Nome da pelada"
          {...register('peladaName')}
        />
        <InputTextField
          errorMessage={errors?.password?.message}
          type="password"
          label="Senha"
          {...register('password')}
        />
        <InputTextField
          errorMessage={errors?.confirmPassword?.message}
          type="password"
          label="Confirmar senha"
          {...register('confirmPassword')}
        />
        <Flex justifyContent="flex-end" mt="2rem">
          <LoginButton label="Próximo" borderRadius="md" height="2.1rem" w="5.5rem" type="submit" />
        </Flex>
      </Flex>
    </Flex>
  );
};
