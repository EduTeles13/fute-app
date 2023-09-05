import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { GreenTextBox } from '@/components/GreenTextBox';
import { ReturnButton } from '@/components/ReturnButton';

export const Register = () => {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      gap="2rem"
      alignItems="center"
      paddingTop="3.75rem"
      w="100%"
    >
      <Flex w="100%" justifyContent="space-between" marginBottom="8rem" alignItems="center">
        <ReturnButton />
        <Box>
          <Text as="b" fontSize="lg">
            Cadastro de Pelada
          </Text>
        </Box>
        <Box width="4.89em"></Box>
      </Flex>
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
