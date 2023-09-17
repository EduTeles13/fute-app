import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  GridItem,
} from '@chakra-ui/react';
import React from 'react';

import { ReturnButton } from '@/components/ReturnButton';

export const Futes = () => {
  return (
    <Flex marginTop="3rem">
      <GridItem colSpan={1}>
        <ReturnButton />
      </GridItem>
      <NumberInput w="70%">
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  );
};
