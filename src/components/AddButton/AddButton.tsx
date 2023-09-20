import { Button } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

const AddButton: React.FC<{ to: string }> = ({ to }) => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push(to);
  };

  return (
    <Button
      colorScheme="teal"
      onClick={handleButtonClick}
      size="lg"
      borderRadius="full"
      boxShadow="lg"
    >
      +
    </Button>
  );
};

export default AddButton;
