import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { BarChart4, Home, UserCog } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

import { ButtonComponent } from '@/components/Button';
import { Navigation } from '@/components/Navigation';
import { cookies } from '@/utils';

export const Profile = () => {
  const { data } = useSession();
  const footyId = data?.user?.id;

  return (
    <Flex flexDir="column" height="100%" justifyContent="space-between" gap="1rem">
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
      <ButtonComponent
        label="Logout"
        onClick={() => {
          signOut({ redirect: true });
          cookies.clearAccess();
        }}
      />
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
