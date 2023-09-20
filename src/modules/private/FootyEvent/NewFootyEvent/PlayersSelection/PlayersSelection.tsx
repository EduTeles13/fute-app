import { Flex, Grid, GridItem, Text, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { useCreateFootyEvent } from '@/api/FootyEvent/hooks/useCreateFootyEvent';
import { CButton } from '@/components/CButton';
import { ReturnButton } from '@/components/ReturnButton';
import { useFootyEventStore } from '@/store/FootyEventStore';

import { DailyPlayers } from './components/DailyPlayers';
import { MonthlyPlayers } from './components/MonthlyPlayers';

type Player = { id?: string; name: string; stars: number; presence: boolean };

export type PlayerSelectionFormType = {
  monthlyPlayers: Player[];
  dailyPlayers: Player[];
};

export const PlayerSelection = () => {
  const { push } = useRouter();
  const { data } = useSession();
  const toast = useToast();
  const footyId = data?.user?.id;
  const footyPlayers = useMemo(() => {
    return data?.user?.user?.players ?? [];
  }, [data]);

  const config = useFootyEventStore((state) => state.config);
  const { mutate } = useCreateFootyEvent();
  const { handleSubmit, control, reset } = useForm<PlayerSelectionFormType>({
    mode: 'onChange',
  });

  useEffect(() => {
    const formData = footyPlayers.reduce<{
      dailyPlayers: Player[];
      monthlyPlayers: Player[];
    }>(
      (acc, cur) => {
        if (cur.type === 'daily') {
          acc.dailyPlayers.push({ id: cur.id, name: cur.name, stars: cur.stars, presence: true });
        }

        if (cur.type === 'monthly') {
          acc.monthlyPlayers.push({ id: cur.id, name: cur.name, stars: cur.stars, presence: true });
        }

        return {
          dailyPlayers: [...acc.dailyPlayers],
          monthlyPlayers: [...acc.monthlyPlayers],
        };
      },
      {
        dailyPlayers: [],
        monthlyPlayers: [],
      },
    );

    reset({ ...formData });
  }, [footyPlayers, reset]);

  const submitPlayers = (data: PlayerSelectionFormType) => {
    const daily = data.dailyPlayers.map((player) => ({
      name: player.name,
      ...(player.id && { id: player.id }),
      stars: player.stars,
      type: 'daily,',
    }));

    const monthly = data.monthlyPlayers.map((player) => ({
      name: player.name,
      ...(player.id && { id: player.id }),
      stars: player.stars,
      type: 'monthly,',
    }));

    const players = [...monthly, ...daily];

    mutate(
      {
        body: {
          footyId: footyId as string,
          playersPerTeam: config.playersPerTeam,
          numberOfTeams: config.teamsQty,
          endHour: new Date(config.endTime).toISOString(),
          startHour: new Date(config.startTime).toISOString(),
          players: players,
        },
      },
      {
        onSuccess: () => {
          toast({
            title: 'Pelada criada com sucesso',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          push(`/admin/${footyId}`);
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
        <Flex justifyContent="flex-end">
          <CButton label="Finalizar" borderRadius="md" height="2.1rem" w="5.5rem" type="submit" />
        </Flex>
      </Flex>
    </Flex>
  );
};
