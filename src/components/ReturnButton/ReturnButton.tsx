// components/ArrowButton.tsx
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const ReturnButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back(); // Esta função do Next.js retorna para a página anterior
  };

  return (
    <Button
      onClick={handleClick}
      leftIcon={<ChevronLeftIcon boxSize={10} />}
      // colorScheme="teal"
      size="md"
      bgColor="white"
    ></Button>
  );
};
