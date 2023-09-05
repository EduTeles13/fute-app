// components/LoginButton.tsx

import { Button, ButtonProps } from '@chakra-ui/react';

interface LoginButtonProps extends ButtonProps {
  children: React.ReactNode;
  onClick?: () => void; // Adicionamos uma prop onClick
}

const LoginButton: React.FC<LoginButtonProps> = ({ children, onClick, ...rest }) => {
  return (
    <Button
      colorScheme="white"
      variant="outline"
      borderColor="green.500"
      color="green.500"
      _hover={{ bg: 'green.500', color: 'white' }}
      onClick={onClick} // Chama a função onClick quando o botão é clicado
      {...rest}
    >
      {children}
    </Button>
  );
};

export default LoginButton;
