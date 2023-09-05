import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { GreenTextBox } from '@/components/GreenTextBox';

export const Register = () => {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      gap="2rem"
      alignItems="center"
      paddingTop="3.75rem"
    >
      <Box marginBottom="8rem">
        <Text as="b" fontSize="lg">
          Cadastro de Pelada
        </Text>
      </Box>
      <Flex flexDir="column" justifyContent="space-between" gap="2rem" alignItems="center">
        <Box>
          <GreenTextBox type="text" label="E-mail" />
        </Box>
        <Box>
          <GreenTextBox type="text" label="Nome da pelada" />
        </Box>
        <Box>
          <GreenTextBox type="password" label="Senha" />
        </Box>
        <Box>
          <GreenTextBox type="password" label="Confirmar senha" />
        </Box>
      </Flex>
    </Flex>
  );
};
