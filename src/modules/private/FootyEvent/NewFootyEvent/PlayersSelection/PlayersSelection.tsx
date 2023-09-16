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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { CButton } from '@/components/CButton';
import { CModal } from '@/components/Modal/CMolda';
import { ReturnButton } from '@/components/ReturnButton';

import { AddPlayerModal } from './components/AddPlayerModal';

export type PlayerSelectionFormType = {
  players: { name: string; stars: number; isMonthlyPlayer: boolean }[];
};

export const PlayersSelection = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { handleSubmit, control } = useForm<PlayerSelectionFormType>({
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

  const submitPlayers = (data: PlayerSelectionFormType) => {
    onOpen();
    console.log(data);
  };

  return (
    <Flex flexDir="column" gap="3rem" mt="2rem" as="form" onSubmit={handleSubmit(submitPlayers)}>
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem colSpan={1}>
          <ReturnButton />
        </GridItem>
        <GridItem colSpan={2} display="flex" alignItems="center" justifyContent="center">
          <Text fontWeight="bold" fontSize="lg">
            Criação de Evento de Pelada
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
        <CButton label="Finalizar" type="submit" />
      </Flex>
      <CModal isOpen={open} onClose={onClose}>
        Modal
      </CModal>
    </Flex>
  );
};
