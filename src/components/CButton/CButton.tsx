import { Button, ButtonProps } from '@chakra-ui/react';

interface CButtonProps extends ButtonProps {
  label: string;
  onClick?: () => void;
}

export const CButton: React.FC<CButtonProps> = ({ label, onClick, ...rest }) => {
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
