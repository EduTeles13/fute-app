import { Input } from '@chakra-ui/react';
import React from 'react';
type TextBoxProperties = {
  label: string;
  type: string;
};

export const GreenTextBox = ({ label, type }: TextBoxProperties) => {
  return (
    <Input
      type={type}
      height="2rem"
      width="22rem"
      borderRadius="sm"
      borderColor="primary.100"
      borderWidth="0.15rem"
      placeholder={label}
      _hover={{ borderColor: 'gray.400' }}
      _focus={{ borderColor: 'blue.400' }}
    />
  );
};
