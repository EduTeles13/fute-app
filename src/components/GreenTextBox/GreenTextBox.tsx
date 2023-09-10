import { Input, InputProps, Flex, Text } from '@chakra-ui/react';
import React, { ForwardRefRenderFunction, forwardRef } from 'react';
type GreenTextBoxProps = {
  label: string;
  errorMessage?: string;
} & InputProps;

const GreenTextBoxBase: ForwardRefRenderFunction<HTMLInputElement, GreenTextBoxProps> = (
  { label, errorMessage, ...rest },
  ref,
) => {
  return (
    <Flex flexDir="column">
      <Text>{label}</Text>
      <Input
        ref={ref}
        height="2rem"
        borderRadius="sm"
        borderColor="primary.100"
        borderWidth="0.15rem"
        _hover={{ borderColor: 'gray.400' }}
        _focus={{ borderColor: 'blue.400' }}
        {...rest}
      />
      {errorMessage && (
        <Text color="red" fontSize="xs">
          {errorMessage}
        </Text>
      )}
    </Flex>
  );
};

export const GreenTextBox = forwardRef(GreenTextBoxBase);
