import { Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

import { InputNumberField } from '@/components/InputNumberField';
import { InputTextField } from '@/components/InputTextField';
import { LoginButton } from '@/components/LoginButton';
import { ReturnButton } from '@/components/ReturnButton';

import { validator } from './validator';

type RegisterFormType = {
  startTime: string;
  endTime: string;
  playersPerTeam: number;
  teamsQty: number;
};

export const NewFootyEvent = () => {
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
    router.push('');
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
            Criação de Evento de Pelada
          </Text>
        </GridItem>
        <GridItem />
      </Grid>
      <Flex flexDir="column" justifyContent="space-between" gap="1rem" px="1rem">
        <InputTextField
          errorMessage={errors?.startTime?.message}
          type="time"
          label="Horário de início da pelada"
          {...register('startTime')}
        />
        <InputTextField
          errorMessage={errors?.endTime?.message}
          label="Horário de término da pelada"
          type="time"
          {...register('endTime')}
        />
        <InputNumberField
          errorMessage={errors?.playersPerTeam?.message}
          label="Número de jogadores por time na pelada"
          {...register('playersPerTeam')}
        />
        <InputNumberField
          errorMessage={errors?.teamsQty?.message}
          label="Número de times em cada pelada"
          {...register('teamsQty')}
        />
        <Flex justifyContent="flex-end" mt="2rem">
          <LoginButton label="Avançar" borderRadius="md" height="2.1rem" w="5.5rem" type="submit" />
        </Flex>
      </Flex>
    </Flex>
  );
};
