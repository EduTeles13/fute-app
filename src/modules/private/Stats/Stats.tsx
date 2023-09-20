import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { BarChart4, Home, UserCog } from 'lucide-react';
import { useSession } from 'next-auth/react';
import React from 'react';

import { Navigation } from '@/components/Navigation';

export const Stats = () => {
  const { data } = useSession();
  const footyId = data?.user?.id;

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
