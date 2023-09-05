import { Flex, Box, Heading } from '@chakra-ui/react';

import { ClickableText } from '@/components/ClickableText/ClickableText';
import { LoginButton } from '@/components/LoginButton';
import { ReturnButton } from '@/components/ReturnButton';
import { TextInput } from '@/components/TextInput';

export const Login = () => {
  return (
    <>
      <Flex marginTop="3.75rem">
        <Box>
          <ReturnButton />
        </Box>
        <Flex
          w="100%"
          h="100hv"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          color="black"
          paddingRight="5rem"
        >
          <Heading fontSize="xl">Login</Heading>
        </Flex>
      </Flex>
      <Flex
        marginTop="9rem"
        flexDir="column"
        justifyContent="space-between"
        gap="2rem"
        alignItems="left"
        marginLeft="2rem"
      >
        <TextInput label="E-mail" placeholder="Digite seu e-mail" borderRadius="md" width="22rem" />

        <TextInput label="Senha" placeholder="Digite a sua senha" borderRadius="md" width="22rem" />

        <LoginButton label="Entrar" borderRadius="md" width="5rem" marginLeft="8.5rem" />

        <ClickableText text="Ainda não está cadastrado? Cadastre-se aqui" href="/futes" />
      </Flex>
    </>
  );
};
