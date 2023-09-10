import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const ReturnButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Button
      onClick={handleClick}
      leftIcon={<ChevronLeftIcon boxSize={10} />}
      size="md"
      bgColor="white"
    ></Button>
  );
};
