import { Flex, Text, GridItem, Grid } from '@chakra-ui/react';
import React from 'react';

import { ReturnButton } from '@/components/ReturnButton';

export const PlayersSetup = () => {
  return (
    <Flex flexDir="column" gap="3rem" mt="2rem">
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem colSpan={1}>
          <ReturnButton />
        </GridItem>
        <GridItem colSpan={2} display="flex" alignItems="center" justifyContent="center">
          <Text fontWeight="bold" fontSize="lg">
            Cadastro de Pelada
          </Text>
        </GridItem>
        <GridItem />
      </Grid>
    </Flex>
  );
};
