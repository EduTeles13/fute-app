import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactNode } from 'react';

type NavigationProps = {
  routes: { route: string; section: string; icon: ReactNode }[];
};

export const Navigation = ({ routes }: NavigationProps) => {
  return (
    <Flex justifyContent="space-around" borderTop="1px solid black" py="0.5rem" mt="2rem">
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
