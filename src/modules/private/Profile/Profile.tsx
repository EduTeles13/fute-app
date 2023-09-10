import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { Home, UserCog } from 'lucide-react';
import { useSession } from 'next-auth/react';
import React from 'react';

import { Navigation } from '@/components/Navigation';

export const Profile = () => {
  const { data } = useSession();
  const username = data?.user?.name;

  return (
    <Flex flexDir="column" height="calc(100vh - 2rem)" justifyContent="space-between">
      <Flex flexDir="column" gap="3rem" mt="2rem">
        <Grid templateColumns="repeat(4, 1fr)">
          <GridItem colSpan={1} />
          <GridItem colSpan={2} display="flex" alignItems="center" justifyContent="center">
            <Text fontWeight="bold" fontSize="lg">
              Configurações
            </Text>
          </GridItem>
          <GridItem />
        </Grid>
      </Flex>
      <Navigation
        routes={[
          { icon: <Home />, route: `/admin/${username}`, section: 'home' },
          { icon: <UserCog />, route: `/admin/${username}/profile`, section: 'profile' },
        ]}
      />
    </Flex>
  );
};
