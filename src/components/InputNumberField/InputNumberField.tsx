import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Text,
  NumberInputFieldProps,
} from '@chakra-ui/react';
import React, { ForwardRefRenderFunction, forwardRef } from 'react';

type InputNumberFieldProps = {
  label: string;
  errorMessage?: string;
} & NumberInputFieldProps;

export const InputNumberFieldBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputNumberFieldProps
> = ({ label, errorMessage, ...rest }, ref) => {
  return (
    <Flex flexDir="column">
      <Text>{label}</Text>
      <NumberInput defaultValue={0} min={0} max={40}>
        <NumberInputField
          height="2rem"
          borderRadius="sm"
          borderWidth="0.15rem"
          style={{ boxSizing: 'border-box' }}
          _focus={{ borderColor: 'primary.100' }}
          borderColor="gray.100"
          ref={ref}
          {...rest}
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      {errorMessage && (
        <Text color="red" fontSize="xs">
          {errorMessage}
        </Text>
      )}
    </Flex>
  );
};

export const InputNumberField = forwardRef(InputNumberFieldBase);
