import { Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
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
    reset,
  } = useForm<RegisterFormType>({
    mode: 'onChange',
    resolver: yupResolver(validator),
  });
  const { data } = useSession();
  const footyId = data?.user?.id;
  const router = useRouter();
  const { data: sessionData } = useSession();
  const setConfig = useFootyEventStore((state) => state.setConfig);

  useEffect(() => {
    reset({
      startTime: new Date(sessionData?.user?.user?.start_hour as string).toISOString().slice(0, 16),
      endTime: new Date(sessionData?.user?.user?.end_hour as string).toISOString().slice(0, 16),
      playersPerTeam: sessionData?.user?.user?.players_per_team ?? 0,
      teamsQty: sessionData?.user?.user?.num_of_teams ?? 0,
    });
  }, [sessionData, reset]);

  const submitRegister = (data: RegisterFormType) => {
    router.push(`/admin/${footyId}/criacao/selecao-de-jogadores`);
    setConfig({
      ...data,
      endTime: dayjs(data.endTime).toISOString(),
      startTime: dayjs(data.startTime).toISOString(),
    });
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
          type="datetime-local"
          label="Horário de início da pelada"
          {...register('startTime', {
            valueAsDate: true,
          })}
        />
        <InputTextField
          errorMessage={errors?.endTime?.message}
          label="Horário de término da pelada"
          type="datetime-local"
          {...register('endTime', {
            valueAsDate: true,
          })}
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
