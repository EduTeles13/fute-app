import { Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useForm } from 'react-hook-form';

import { CButton } from '@/components/CButton';
import { InputNumberField } from '@/components/InputNumberField';
import { InputTextField } from '@/components/InputTextField';
import { ReturnButton } from '@/components/ReturnButton';
import { useFootyEventStore } from '@/store/FootyEventStore';

import { validator } from './validator';

type RegisterFormType = {
  startTime: string;
  endTime: string;
  playersPerTeam: number;
  teamsQty: number;
};

export const ConfigSelection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    mode: 'onChange',
    resolver: yupResolver(validator),
  });
  const { data } = useSession();
  const username = data?.user?.name;
  const router = useRouter();
  const setConfig = useFootyEventStore((state) => state.setConfig);

  const submitRegister = (data: RegisterFormType) => {
    router.push(`/admin/${username}/criacao/selecao-de-jogadores`);
    setConfig(data);
  };

  return (
    <Flex flexDir="column" gap="3rem" mt="2rem" as="form" onSubmit={handleSubmit(submitRegister)}>
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem colSpan={1}>
          <ReturnButton />
        </GridItem>
        <GridItem colSpan={2} display="flex" alignItems="center" justifyContent="center">
          <Text fontWeight="bold" fontSize="lg">
            Nova pelada
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
          {...register('playersPerTeam', { valueAsNumber: true })}
        />
        <InputNumberField
          errorMessage={errors?.teamsQty?.message}
          label="Número de times em cada pelada"
          {...register('teamsQty', { valueAsNumber: true })}
        />
        <Flex justifyContent="flex-end" mt="2rem">
          <CButton label="Avançar" borderRadius="md" height="2.1rem" w="5.5rem" type="submit" />
        </Flex>
      </Flex>
    </Flex>
  );
};
