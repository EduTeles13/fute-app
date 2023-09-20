import { Center, Flex, Grid, GridItem, Spinner, Text } from '@chakra-ui/react';
import { BarChart4, Home, UserCog } from 'lucide-react';
import { useSession } from 'next-auth/react';
import React from 'react';

import { useGetFootyStats } from '@/api/Footy/hooks/useGetFootyStats';
import { Navigation } from '@/components/Navigation';
import { StatsTable } from '@/components/StatsTable/StatsTable';

export const Stats = () => {
  const { data } = useSession();
  const footyId = data?.user?.id;

  const { data: stats, isLoading } = useGetFootyStats({ id: footyId as string });

  return (
    <Flex flexDir="column" height="100%" justifyContent="space-between">
      <Flex flexDir="column" gap="3rem" mt="2rem">
        <Grid templateColumns="repeat(4, 1fr)">
          <GridItem colSpan={1} />
          <GridItem colSpan={2} display="flex" alignItems="center" justifyContent="center">
            <Text fontWeight="bold" fontSize="lg">
              Estatísticas
            </Text>
          </GridItem>
          <GridItem />
        </Grid>
        {isLoading ? (
          <Center mt={6}>
            <Spinner color="primary.100" />
          </Center>
        ) : (
          <StatsTable data={stats?.data ?? []} />
        )}
      </Flex>
      <Navigation
        routes={[
          { icon: <Home />, route: `/admin/${footyId}`, section: 'home' },
          { icon: <BarChart4 />, route: `/admin/${footyId}/estatisticas`, section: 'home' },
          { icon: <UserCog />, route: `/admin/${footyId}/profile`, section: 'profile' },
        ]}
      />
    </Flex>
  );
};
