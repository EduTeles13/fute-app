import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { BarChart4, HomeIcon, LogIn } from 'lucide-react';
import { useRouter } from 'next/router';
import React from 'react';

import { Navigation } from '@/components/Navigation';
import { ReturnButton } from '@/components/ReturnButton';

const footyEvents = [
  {
    id: '1',
    createdAt: '22/08/2023',
    status: 'Ativa',
  },
  {
    id: '2',
    createdAt: '29/08/2023',
    status: 'Encerrada',
  },
  {
    id: '3',
    createdAt: '06/09/2023',
    status: 'Encerrada',
  },
  {
    id: '1',
    createdAt: '22/08/2023',
    status: 'Ativa',
  },
];

export const Fute = () => {
  const { push } = useRouter();
  return (
    <Flex flexDir="column" height="calc(100vh - 2rem)" justifyContent="space-between">
      <Flex flexDir="column" gap="3rem" mt="2rem">
        <Grid templateColumns="repeat(4, 1fr)">
          <GridItem colSpan={1}>
            <ReturnButton />
          </GridItem>
          <GridItem colSpan={2} display="flex" alignItems="center" justifyContent="center">
            <Text fontWeight="bold" fontSize="lg">
              Pelada da Urna
            </Text>
          </GridItem>
          <GridItem />
        </Grid>
        <Flex flexDir="column" gap="1rem" w="100%">
          {footyEvents.map((event) => {
            return (
              <Flex
                key={event.id}
                bgGradient="linear-gradient(90deg, rgba(29,214,80,1) 39%, rgba(255,255,255,1) 100%)"
                p="0.5rem"
                px="1rem"
                borderRadius="md"
                boxShadow="md"
                gap="0.5rem"
                onClick={() => push(`/futes/pelada-urna/${event.id}`)}
              >
                <Text color="black" fontWeight="semibold" mb="1.5rem">
                  {event.createdAt}
                </Text>
                <Text color="black" fontWeight="semibold" mb="1.5rem">
                  {event.status}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      <Navigation
        routes={[
          { icon: <HomeIcon />, route: `/futes`, section: 'home' },
          { icon: <BarChart4 />, route: `/futes/pelada-urna/estatisticas`, section: 'stats' },
          { icon: <LogIn />, route: `/entrar`, section: 'login' },
        ]}
      />
    </Flex>
  );
};
