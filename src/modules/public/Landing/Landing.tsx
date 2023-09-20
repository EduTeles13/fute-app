import { VStack, Box, Text, Flex, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

import { ButtonComponent } from '@/components/Button';

export const Landing = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/entrar');
  };

  const handleButtonClick2 = () => {
    router.push('/futes');
  };

  return (
    <VStack spacing={4} mx="auto" my="auto">
      <Flex flexDir="column" justifyContent="space-between" gap="10rem" alignItems="center">
        <Box paddingTop="5rem">
          <Text as="b" fontSize="30px">
            Bem-vindo ao Fute App!
          </Text>
        </Box>
        <Flex flexDir="column" justifyContent="space-between" gap="1.2rem" alignItems="center">
          <Box paddingBottom="1rem">
            <Text as="b" fontSize="sm">
              Qual seu papel na pelada?
            </Text>
          </Box>
          <Box>
            <Link onClick={handleButtonClick}>
              <ButtonComponent label="Organizador" />
            </Link>
          </Box>
          <Box>
            <Link onClick={handleButtonClick2}>
              <ButtonComponent label="Jogador" width="155px" />
            </Link>
          </Box>
        </Flex>
      </Flex>
    </VStack>
  );
};
