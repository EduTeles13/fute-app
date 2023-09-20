import {
  Flex,
  Grid,
  GridItem,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
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
      <TableContainer marginTop="3rem">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>nome</Th>
              <Th>Gols</Th>
              <Th>Assistências</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Guilherme</Td>
              <Td>10</Td>
              <Td>5</Td>
            </Tr>
            <Tr>
              <Td>Eduardo</Td>
              <Td>58</Td>
              <Td>196</Td>
            </Tr>
            <Tr>
              <Td>Breno</Td>
              <Td>1</Td>
              <Td>1</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
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
