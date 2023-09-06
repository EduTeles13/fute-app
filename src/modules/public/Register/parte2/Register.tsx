import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { GreenInputNumber } from '@/components/GreenInputNumber';
import { GreenTextBox } from '@/components/GreenTextBox';
import { LoginButton } from '@/components/LoginButton';
import { ReturnButton } from '@/components/ReturnButton';

export const Register2 = () => {
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
        <Box width="4.89em"></Box>
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
          <Text>Horário de início da pelada</Text>
          <GreenTextBox label="" type="text" width="100%" />
        </Box>
        <Box w="100%">
          <Text>Horário de término da pelada</Text>
          <GreenTextBox label="" type="text" width="100%" />
        </Box>
        <Box w="100%">
          <Text>Número de jogadores em cada pelada </Text>
          <GreenInputNumber label="Número de jogadores" type="text" />
        </Box>
        <Box w="100%">
          <Text>Número de times em cada pelada</Text>
          <GreenInputNumber label="Número de times" type="text" />
        </Box>
      </Flex>
      <Flex justifyContent="flex-end" width="100%" mt="2rem">
        <LoginButton
          label="Próximo"
          borderRadius="md"
          height="2.1rem"
          width="5.5rem"
          marginRight="5%"
        />
      </Flex>
    </Flex>
  );
};
