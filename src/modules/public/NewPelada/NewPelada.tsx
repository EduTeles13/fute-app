import {
  Heading,
  Flex,
  Box,
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

import { GreenTextBox } from '@/components/GreenTextBox';
import { LoginButton } from '@/components/LoginButton';

export const NewPelada = () => {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      gap="2rem"
      border="1px solid black"
      borderRadius="md"
      paddingBottom="5rem"
      shadow="xl"
      marginTop="7rem"
    >
      <Flex flexDir="row" justifyContent="space-between" gap="2rem">
        <Heading marginTop="1rem" marginLeft="1.5rem" fontSize="xl" as="b">
          Novo Jogador
        </Heading>
        <CloseButton marginTop="0.75rem" marginRight="0.75rem" size="lg" />
      </Flex>
      <Box marginLeft="1rem" marginTop="5rem">
        <GreenTextBox label="Nome do jogador" type="text" />
      </Box>
      <Box marginLeft="1rem">
        <GreenTextBox label="Estrela do jogador" type="text" />
      </Box>
      <Flex flexDir="row">
        <Flex alignContent="row" justifyContent="space-between" gap="0.75rem">
          <Text marginTop="0.5rem" marginLeft="2rem">
            Mensalista
          </Text>
          {/* <InformationBox message="Mensalista é o jogador que paga um valor mensal, e tem prioridade na lista para jogar" /> */}
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
        <Switch colorScheme="green" size="lg" marginLeft="8rem" marginTop="0.5rem" />
      </Flex>
      <LoginButton
        label="Criar"
        borderRadius="md"
        width="5rem"
        marginLeft="17rem"
        marginTop="5rem"
      />
    </Flex>
  );
};
