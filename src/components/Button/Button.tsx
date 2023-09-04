import { Button, ButtonProps } from '@chakra-ui/react';
type ButtonProperties = {
  label: string;
} & ButtonProps;

export const ButtonComponent = ({ label, ...rest }: ButtonProperties) => {
  return (
    <Button bgColor="primary.100" color="white" borderRadius="md" size="lg" {...rest}>
      {label}
    </Button>
  );
};
