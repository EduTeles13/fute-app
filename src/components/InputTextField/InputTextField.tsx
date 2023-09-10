import { Input, InputProps, Flex, Text } from '@chakra-ui/react';
import React, { ForwardRefRenderFunction, forwardRef } from 'react';
type InputTextFieldProps = {
  label: string;
  errorMessage?: string;
} & InputProps;

const InputTextFieldBase: ForwardRefRenderFunction<HTMLInputElement, InputTextFieldProps> = (
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

export const InputTextField = forwardRef(InputTextFieldBase);
