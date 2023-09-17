import { Flex, Grid, GridItem, Text, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';

import { useCreateFootyEvent } from '@/api/FootyEvent/hooks/useCreateFootyEvent';
import { CButton } from '@/components/CButton';
import { ReturnButton } from '@/components/ReturnButton';
import { useFootyEventStore } from '@/store/FootyEventStore';

import { DailyPlayers } from './components/DailyPlayers';
import { MonthlyPlayers } from './components/MonthlyPlayers';

type Player = { name: string; stars: number; presence: boolean };

export type PlayerSelectionFormType = {
  monthlyPlayers: Player[];
  dailyPlayers: Player[];
};

export const PlayerSelection = () => {
  const { push } = useRouter();
  const { data } = useSession();
  const toast = useToast();
  const username = data?.user?.name;
  const config = useFootyEventStore((state) => state.config);
  const { mutate } = useCreateFootyEvent();
  const { handleSubmit, control } = useForm<PlayerSelectionFormType>({
    mode: 'onChange',
    defaultValues: {
      monthlyPlayers: [
        {
          name: 'Luca',
          stars: 5,
          presence: true,
        },
        {
          name: 'Gui',
          stars: 5,
          presence: true,
        },
        {
          name: 'Breno',
          stars: 5,
          presence: true,
        },
      ],
      dailyPlayers: [
        {
          name: 'Dudu',
          stars: 4,
          presence: true,
        },
      ],
    },
  });

  const submitPlayers = (data: PlayerSelectionFormType) => {
    mutate(
      { footyId: 'teste', body: { ...config, players: { ...data } } },
      {
        onSuccess: (response) => {
          const id = response.id ?? 'nova-pelada';
          toast({
            title: 'Pelada criada com sucesso',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          push(`/admin/${username}/${id}`);
        },
        onError: () => {
          toast({
            title: 'Erro ao criar pelada',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        },
      },
    );
  };

  return (
    <Flex flexDir="column" gap="3rem" mt="2rem" as="form" onSubmit={handleSubmit(submitPlayers)}>
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
      <Flex flexDir="column" justifyContent="space-between" gap="2rem" px="1rem">
        <MonthlyPlayers control={control} />
        <DailyPlayers control={control} />
        <CButton label="Finalizar" type="submit" />
      </Flex>
    </Flex>
  );
};
