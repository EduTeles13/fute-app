import { Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

import { InputTextField } from '@/components/InputTextField';
import { LoginButton } from '@/components/LoginButton';
import { ReturnButton } from '@/components/ReturnButton';

export const PeladaCreation = () => {
  return (
    <Flex flexDir="column" gap="3rem" mt="2rem">
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={1}>
          <ReturnButton />
        </GridItem>
        <GridItem colSpan={3} display="flex" alignItems="center" justifyContent="center">
          <Text fontWeight="bold" fontSize="lg">
            Criaçao de evento pelada
          </Text>
        </GridItem>
        <GridItem />
      </Grid>
      <Flex flexDir="column" justifyContent="space-between" gap="1rem" px="1rem">
        <InputTextField type="date" label="Data da pelada" />
        <InputTextField type="time" label="Horário de início da pelada" />
        <InputTextField label="Horário de término da pelada" type="time" />
        <InputTextField label="Senha" type="password" />
        <InputTextField label="Confirmar senha" type="password" />
        <Flex justifyContent="flex-end" mt="2rem">
          <LoginButton label="Próximo" borderRadius="md" height="2.1rem" w="5.5rem" />
        </Flex>
      </Flex>
    </Flex>
  );
};
