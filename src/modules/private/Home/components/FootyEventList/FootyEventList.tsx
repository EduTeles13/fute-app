import { Flex, Text } from '@chakra-ui/react';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import React from 'react';

const footyEvents = [
  {
    id: '1',
    createdAt: '22/08/2023',
    status: 'Ativa',
  },
  {
    id: '2',
    createdAt: '29/08/2023',
    status: 'Encerrada',
  },
  {
    id: '3',
    createdAt: '06/09/2023',
    status: 'Encerrada',
  },
  {
    id: '1',
    createdAt: '22/08/2023',
    status: 'Ativa',
  },
];

export const FootyEventList = () => {
  const { push } = useRouter();
  const { data } = useSession();
  const username = data?.user?.name;
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="flex-start"
      overflowY="auto"
      gap="3rem"
    >
      <Flex justifyContent="center" alignItems="center">
        <Link href={`/admin/${username}/criacao`}>
          <PlusCircle size={30} />
        </Link>
      </Flex>
      <Flex flexDir="column" gap="1rem" w="100%" overflowY="auto">
        {footyEvents.map((event) => {
          return (
            <Flex
              key={event.id}
              bgGradient="linear-gradient(90deg, rgba(29,214,80,1) 39%, rgba(255,255,255,1) 100%)"
              p="0.5rem"
              px="1rem"
              borderRadius="md"
              boxShadow="md"
              gap="0.5rem"
              onClick={() => push(`/admin/${username}/${event.id}`)}
            >
              <Text color="black" fontWeight="semibold" mb="1.5rem">
                {event.createdAt}
              </Text>
              <Text color="black" fontWeight="semibold" mb="1.5rem">
                {event.status}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
