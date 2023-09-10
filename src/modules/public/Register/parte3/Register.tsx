import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { LoginButton } from '@/components/LoginButton';
import { ReturnButton } from '@/components/ReturnButton';

import { InputTextField } from '@/components/InputTextField';

export const Register3 = () => {
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
          <InputTextField type="text" label="E-mail" />
        </Box>
        <Box>
          <InputTextField type="text" label="Nome da pelada" />
        </Box>
        <Box>
          <InputTextField type="password" label="Senha" />
        </Box>
        <Box>
          <InputTextField type="password" label="Confirmar senha" />
        </Box>
      </Flex>
      <Flex justifyContent="flex-end">
        <LoginButton
          label="Próximo"
          borderRadius="md"
          height="2.1rem"
          width="5.5rem"
          marginTop="1.2rem"
          marginLeft="15.3rem"
        />
      </Flex>
    </Flex>
  );
};
