import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { BarChart4, Home, UserCog } from 'lucide-react';
import { useSession } from 'next-auth/react';

import { Navigation } from '@/components/Navigation';

import { FootyEventList } from './components/FootyEventList';

export const HomeFooty = () => {
  const { data } = useSession();
  const username = data?.user?.name;

  return (
    <Flex flexDir="column" height="calc(100vh - 2rem)" justifyContent="space-between">
      <Flex flexDir="column" gap="3rem" mt="2rem">
        <Grid templateColumns="repeat(4, 1fr)">
          <GridItem colSpan={1} />
          <GridItem colSpan={2} display="flex" alignItems="center" justifyContent="center">
            <Text fontWeight="bold" fontSize="lg">
              Pelada da Urna
            </Text>
          </GridItem>
          <GridItem />
        </Grid>
        <FootyEventList />
      </Flex>
      <Navigation
        routes={[
          { icon: <Home />, route: `/admin/${username}`, section: 'home' },
          { icon: <BarChart4 />, route: `/admin/${username}/estatisticas`, section: 'home' },
          { icon: <UserCog />, route: `/admin/${username}/profile`, section: 'profile' },
        ]}
      />
    </Flex>
  );
};
