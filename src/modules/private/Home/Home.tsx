import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { BarChart4, Home, UserCog } from 'lucide-react';
import { useSession } from 'next-auth/react';

import { Navigation } from '@/components/Navigation';

import { FootyEventList } from './components/FootyEventList';

export const HomeFooty = () => {
  const { data } = useSession();
  const footyId = data?.user?.id;
  const footyName = data?.user.user.name;

  return (
    <Flex flexDir="column" height="100%" justifyContent="space-between">
      <Flex flexDir="column" gap="3rem" mt="2rem">
        <Grid templateColumns="repeat(4, 1fr)">
          <GridItem colSpan={1} />
          <GridItem colSpan={2} display="flex" alignItems="center" justifyContent="center">
            <Text fontWeight="bold" fontSize="lg">
              {footyName}
            </Text>
          </GridItem>
          <GridItem />
        </Grid>
        <FootyEventList />
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
