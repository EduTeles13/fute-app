import {
  Heading,
  Flex,
  Text,
  Switch,
  CloseButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Button,
} from '@chakra-ui/react';

import { InputTextField } from '@/components/InputTextField';
import { LoginButton } from '@/components/LoginButton';

export const NewFute = () => {
  return (
    <Flex
      w="100%"
      flexDir="column"
      justifyContent="space-between"
      gap="2rem"
      border="1px solid"
      borderColor="gray.100"
      borderRadius="md"
      shadow="xl"
      p="1.5rem"
      my="auto"
    >
      <Flex flexDir="row" justifyContent="space-between" gap="2rem">
        <Heading marginTop="1rem" fontSize="xl" as="b">
          Novo Jogador
        </Heading>
        <CloseButton marginTop="0.75rem" marginRight="0.75rem" size="lg" />
      </Flex>

      <InputTextField label="Nome do jogador" type="text" />

      <InputTextField label="Estrela do jogador" type="text" />

      <Flex flexDir="row" justifyContent="space-between">
        <Flex alignContent="row" justifyContent="space-between" gap="0.75rem">
          <Text marginTop="0.5rem">Mensalista</Text>
          <Popover>
            <PopoverTrigger>
              <Button fontSize="sm" fontStyle="italic">
                i
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody>
                Jogador que paga um valor mensal, e tem prioridade na lista para jogar
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
        <Switch colorScheme="green" size="lg" marginTop="0.5rem" />
      </Flex>

      <LoginButton
        label="Criar"
        borderRadius="md"
        width="5rem"
        marginTop="5rem"
        alignSelf="flex-end"
      />
    </Flex>
  );
};
