import { Input, Flex, GridItem } from '@chakra-ui/react';
import React from 'react';

import { ReturnButton } from '@/components/ReturnButton';

export const Futes = () => {
  return (
    <Flex marginTop="3rem">
      <GridItem colSpan={1}>
        <ReturnButton />
      </GridItem>
      <Input placeholder="Digite o código da pelada" w="70%" />
    </Flex>
  );
};
