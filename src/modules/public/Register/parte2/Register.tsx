import { Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

import { GreenTextBox } from '@/components/GreenTextBox';
import { LoginButton } from '@/components/LoginButton';
import { ReturnButton } from '@/components/ReturnButton';

export const Register2 = () => {
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
      <Flex flexDir="column" justifyContent="space-between" gap="1rem" px="1rem">
        <GreenTextBox type="time" label="Horário de início da Pelada" />
        <GreenTextBox label="Horário de término da pelada" type="time" />
        <GreenTextBox label="Senha" type="password" />
        <GreenTextBox label="Confirmar senha" type="password" />
        <Flex justifyContent="flex-end" mt="2rem">
          <LoginButton label="Próximo" borderRadius="md" height="2.1rem" w="5.5rem" />
        </Flex>
      </Flex>
    </Flex>
  );
};
ya