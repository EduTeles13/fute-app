import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { GreenTextBox } from '@/components/GreenTextBox';
import { LoginButton } from '@/components/LoginButton';
import { ReturnButton } from '@/components/ReturnButton';

export const Register1 = () => {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      gap="2rem"
      alignItems="center"
      paddingTop="18%"
      w="100%"
    >
      <Flex w="100%" justifyContent="space-between" marginBottom="20%" alignItems="center">
        <ReturnButton />
        <Box>
          <Text as="b" fontSize="lg">
            Cadastro de Pelada
          </Text>
        </Box>
        <Box w="4.89em"></Box>
      </Flex>
      <Flex
        w="100%"
        flexDir="column"
        justifyContent="space-between"
        gap="1rem"
        alignItems="flex-start"
        paddingRight="4%"
        paddingLeft="4%"
      >
        <Box w="100%">
          <Text>E-mail</Text>
          <GreenTextBox label="" type="text" w="100%" />
        </Box>
        <Box w="100%">
          <Text>Nome da pelada</Text>
          <GreenTextBox label="" type="text" w="100%" />
        </Box>
        <Box w="100%">
          <Text>Senha</Text>
          <GreenTextBox label="" type="password" w="100%" />
        </Box>
        <Box w="100%">
          <Text>Número de times em cada pelada</Text>
          <GreenTextBox label="" type="password" w="100%" />
        </Box>
      </Flex>
      <Flex justifyContent="flex-end" w="100%" mt="2rem">
        <LoginButton
          label="Próximo"
          borderRadius="md"
          height="2.1rem"
          w="5.5rem"
          marginRight="5%"
        />
      </Flex>
    </Flex>
  );
};
