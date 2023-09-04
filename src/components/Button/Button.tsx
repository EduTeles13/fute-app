import { Button } from '@chakra-ui/react';
type ButtonProps = {
  label: string;
};

export const ButtonComponent = ({ label }: ButtonProps) => {
  return (
    <Button colorScheme="green" borderRadius="4px" size="lg">
      {label}
    </Button>
  );
};
