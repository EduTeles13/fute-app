import {
  Flex,
  Grid,
  GridItem,
  Switch,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { useCreateFooty } from '@/api/Footy/hooks/useCreateFooty';
import { AddPlayerModal } from '@/components/AddPlayerModal';
import { CButton } from '@/components/CButton';
import { CModal } from '@/components/Modal/CMolda';
import { ReturnButton } from '@/components/ReturnButton';
import { useFootyStore } from '@/store/FootyStore';

export type PlayerSetupFormType = {
  players: { name: string; stars: number; isMonthlyPlayer: boolean }[];
};

export const PlayersSetup = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toast = useToast();
  const { mutate } = useCreateFooty();
  const { push } = useRouter();
  const footyInfo = useFootyStore((state) => state.footyInfo);
  const credentials = useFootyStore((state) => state.credentials);
  const { handleSubmit, control } = useForm<PlayerSetupFormType>({
    mode: 'onChange',
    defaultValues: {
      players: [
        {
          name: 'Luca',
          stars: 5,
          isMonthlyPlayer: true,
        },
        {
          name: 'Gui',
          stars: 5,
          isMonthlyPlayer: true,
        },
        {
          name: 'Breno',
          stars: 5,
          isMonthlyPlayer: true,
        },
      ],
    },
  });

  const { fields, append } = useFieldArray({ control, name: 'players' });

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const submitPlayers = (data: PlayerSetupFormType) => {
    mutate(
      { body: { ...credentials, ...footyInfo, ...data } },
      {
        onSuccess: () => {
          onOpen();
          push('/entrar');
        },
        onError: () => {
          toast({
            title: 'Erro ao criar pelada',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        },
      },
    );
  };

  return (
    <Flex flexDir="column" gap="3rem" mt="2rem">
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem colSpan={1}>
          <ReturnButton />
        </GridItem>
        <GridItem colSpan={2} display="flex" alignItems="center" justifyContent="center">
          <Text fontWeight="bold" fontSize="lg">
            Cadastro de Pelada
          </Text>
        </GridItem>
        <GridItem />
      </Grid>
      <Flex flexDir="column" justifyContent="space-between" gap="2rem" px="1rem">
        <AddPlayerModal append={append} />
        <TableContainer border="1px" borderColor="gray.300" borderRadius="lg">
          <Table>
            <Thead>
              <Tr>
                <Th fontSize="sm" textAlign="center" border="none">
                  NOME
                </Th>
                <Th fontSize="sm" textAlign="center" border="none">
                  ESTRELAS
                </Th>
                <Th fontSize="sm" textAlign="center" border="none">
                  MENSALISTA
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {fields.map((player) => {
                return (
                  <Tr key={player.id} className="no-underline-row">
                    <Td textAlign="center" border="none">
                      {player.name}
                    </Td>
                    <Td textAlign="center" border="none">
                      {player.stars}
                    </Td>
                    <Td textAlign="center" border="none">
                      <Switch colorScheme="green" isChecked={player.isMonthlyPlayer} />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <CButton label="Finalizar" type="button" onClick={handleSubmit(submitPlayers)} />
      </Flex>
      <CModal isOpen={open} onClose={onClose}>
        Modal
      </CModal>
    </Flex>
  );
};
