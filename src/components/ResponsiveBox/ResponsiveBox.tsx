import { Box, BoxProps, SlideFade, useBreakpointValue } from '@chakra-ui/react';

interface ResponsiveBoxProps extends BoxProps {
  children: React.ReactNode;
}

export const ResponsiveBox: React.FC<ResponsiveBoxProps> = ({ children, ...rest }) => {
  const responsivePadding: BoxProps['p'] = useBreakpointValue({ base: 4, sm: 8, md: 12, lg: 16 });

  return (
    <Box
      as={SlideFade}
      minH="100vh"
      position="relative"
      overflowY="auto"
      in={true}
      p={responsivePadding}
      {...rest}
    >
      {children}
    </Box>
  );
};
