import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactNode } from 'react';

type NavigationProps = {
  routes: { route: string; section: string; icon: ReactNode }[];
};

export const Navigation = ({ routes }: NavigationProps) => {
  return (
    <Flex
      justifyContent="space-around"
      borderTop="1px solid black"
      py="1rem"
      w="100%"
      overflow="hidden"
      position="fixed"
      bgColor="white"
      bottom={0}
      left={0}
    >
      {routes.map((route) => {
        return (
          <Link href={route.route} key={route.section}>
            {route.icon}
          </Link>
        );
      })}
    </Flex>
  );
};
