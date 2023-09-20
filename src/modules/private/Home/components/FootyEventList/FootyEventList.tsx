import { Center, Flex, Spinner, Text } from '@chakra-ui/react';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useGetAllFootyEvents } from '@/api/FootyEvent/hooks/useGetAllFootyEvents';

export const FootyEventList = () => {
  const { push } = useRouter();
  const { query } = useRouter();

  const { footy: footyId } = query;

  const { data: events, isLoading } = useGetAllFootyEvents({
    footyId: footyId as string,
    queryConfig: { enabled: !!footyId && footyId != '' },
  });

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="flex-start"
      overflowY="auto"
      gap="3rem"
    >
      <Flex justifyContent="center" alignItems="center">
        <Link href={`/admin/${footyId}/criacao`}>
          <PlusCircle size={30} />
        </Link>
      </Flex>
      <Flex flexDir="column" gap="1rem" w="100%" overflowY="auto">
        {isLoading ? (
          <Center>
            <Spinner color="primary.100" />
          </Center>
        ) : (
          events?.data.map((event) => {
            return (
              <Flex
                flexDir="column"
                key={event.id}
                bgGradient="linear-gradient(90deg, rgba(29,214,80,1) 39%, rgba(255,255,255,1) 100%)"
                py="0.75rem"
                px="1rem"
                borderRadius="md"
                boxShadow="md"
                onClick={() => push(`/admin/${footyId}/${event.id}`)}
              >
                <Text color="black" fontWeight="semibold">
                  {new Date(event.created_at).toUTCString()}
                </Text>
                <Text color="black" fontWeight="semibold">
                  {event.footy.location}
                </Text>
              </Flex>
            );
          })
        )}
      </Flex>
    </Flex>
  );
};
