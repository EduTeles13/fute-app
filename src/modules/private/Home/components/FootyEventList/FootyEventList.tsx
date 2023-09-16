import { Flex, Text } from '@chakra-ui/react';
import { PlusCircle } from 'lucide-react';
import { useRouter } from 'next/router';
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
];

export const FootyEventList = () => {
  const { query, push } = useRouter();
  return (
    <Flex flexDir="column" alignItems="center" justifyContent="flex-start" gap="3rem">
      <Flex justifyContent="center" alignItems="center">
        <PlusCircle size={30} />
      </Flex>
      <Flex flexDir="column" gap="1rem" w="100%">
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
              onClick={() => push(`/admin/${query.footy}/${event.id}`)}
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
