import { Button, ButtonProps } from '@chakra-ui/react';

interface LoginButtonProps extends ButtonProps {
  label: string;
  onClick?: () => void;
}

export const LoginButton: React.FC<LoginButtonProps> = ({ label, onClick, ...rest }) => {
  return (
    <Button
      colorScheme="white"
      variant="outline"
      borderColor="primary.100"
      color="primary.100"
      _hover={{ bg: 'green.500', color: 'white' }}
      onClick={onClick}
      {...rest}
    >
      {label}
    </Button>
  );
};
