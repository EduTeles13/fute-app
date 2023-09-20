import { Flex, Grid, GridItem, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import { Home, LogIn, Search } from 'lucide-react';
import { useRouter } from 'next/router';

import { Navigation } from '@/components/Navigation';
import { ReturnButton } from '@/components/ReturnButton';

const footy = [
  {
    id: '1',
    createdAt: '22/08/2023',
    name: 'pelada_marcos',
    location: 'Arena Torre',
  },
  {
    id: '2',
    createdAt: '29/08/2023',
    name: 'pelada_urna',
    location: 'Arena Torre',
  },
  {
    id: '3',
    createdAt: '06/09/2023',
    name: 'pelada_x',
    location: 'Arena Torre',
  },
  {
    id: '4',
    createdAt: '22/08/2023',
    name: 'pelada_z',
    location: 'Arena Torre',
  },
];

export const Futes = () => {
  const { push } = useRouter();

  return (
    <Flex flexDir="column" height="100%" gap="2rem">
      <Flex flexDir="column" gap="3rem" mt="2rem">
        <Grid templateColumns="repeat(4, 1fr)">
          <GridItem colSpan={1}>
            <ReturnButton />
          </GridItem>
          <GridItem colSpan={2} display="flex" alignItems="center" justifyContent="center">
            <Text fontWeight="bold" fontSize="lg">
              Buscar Fute
            </Text>
          </GridItem>
          <GridItem />
        </Grid>
      </Flex>
      <InputGroup>
        <InputLeftElement>
          <Search />
        </InputLeftElement>
        <Input placeholder="Digite o código da pelada" />
      </InputGroup>
      <Flex flexDir="column" gap="1rem" w="100%" overflowY="auto">
        {footy.map((event) => {
          return (
            <Flex
              flexDir="column"
              key={event.id}
              bgGradient="linear-gradient(90deg, rgba(29,214,80,1) 39%, rgba(255,255,255,1) 100%)"
              p="0.5rem"
              px="1rem"
              borderRadius="md"
              boxShadow="md"
              gap="0.5rem"
              onClick={() => push(`/futes/${event.name}`)}
            >
              <Text color="black" fontWeight="bold" fontSize="xl">
                {event.name}
              </Text>
              <Text color="black" fontWeight="semibold">
                {event.location}
              </Text>
            </Flex>
          );
        })}
      </Flex>
      <Navigation
        routes={[
          { icon: <Home />, route: `/`, section: 'home' },
          { icon: <LogIn />, route: `/entrar`, section: 'login' },
        ]}
      />
    </Flex>
  );
};
