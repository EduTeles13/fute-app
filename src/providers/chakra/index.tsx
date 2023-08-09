import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { theme } from '@/styles';

export const Chakra = ({ children }: { children: ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
