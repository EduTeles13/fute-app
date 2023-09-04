import { VStack, Box, Text } from '@chakra-ui/react';
import React from 'react';

import { ButtonComponent } from '@/components/Button';

export const Fute = () => {
  return (
    <VStack spacing={4} mx="auto" my="auto">
      <Box>
        <Box>
          <Text as="b">Qual seu papel na pelada?</Text>
        </Box>
        <Box>
          <ButtonComponent label="Organizador" />
        </Box>
        <Box>
          <ButtonComponent label="Another Button" />
        </Box>
      </Box>
    </VStack>
  );
};
