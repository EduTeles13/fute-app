import { Input, InputProps } from '@chakra-ui/react';
import React from 'react';

interface TextInputProps extends InputProps {
  label?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ label, ...rest }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <Input {...rest} />
    </div>
  );
};
