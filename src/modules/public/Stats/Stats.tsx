import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { BarChart4, Home, LogIn } from 'lucide-react';
import React from 'react';

import { Navigation } from '@/components/Navigation';

export const Stats = () => {
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
          { icon: <Home />, route: `/futes/pelada-urna`, section: 'home' },
          { icon: <BarChart4 />, route: `/futes/pelada-urna/estatisticas`, section: 'stats' },
          { icon: <LogIn />, route: `/entrar`, section: 'login' },
        ]}
      />
    </Flex>
  );
};
