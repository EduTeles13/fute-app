import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { Control, UseFormRegister, useFieldArray } from 'react-hook-form';

import { InputTextField } from '@/components/InputTextField';

import { FootyEventFormType } from '../FootyEvent';

export const PlayersTable = ({
  index,
  control,
  register,
}: {
  index: number;
  control: Control<FootyEventFormType>;
  register: UseFormRegister<FootyEventFormType>;
}) => {
  const { fields } = useFieldArray({ name: `teams.${index}.players`, control });

  return (
    <TableContainer border="1px" borderColor="gray.300" borderRadius="lg">
      <Table>
        <Thead>
          <Tr>
            <Th fontSize="sm" textAlign="center" border="none">
              NOME
            </Th>
            <Th fontSize="sm" textAlign="center" border="none">
              GOL
            </Th>
            <Th fontSize="sm" textAlign="center" border="none">
              ASSISTÊNCIA
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {fields.map((player, playerIndex) => {
            return (
              <Tr key={player.id} className="no-underline-row">
                <Td textAlign="center" border="none">
                  {player.name}
                </Td>
                <Td textAlign="center" border="none" minWidth="7rem">
                  <InputTextField
                    label=""
                    type="number"
                    {...register(`teams.${index}.players.${playerIndex}.goals`, {
                      valueAsNumber: true,
                    })}
                  />
                </Td>
                <Td textAlign="center" border="none">
                  <InputTextField
                    label=""
                    type="number"
                    {...register(`teams.${index}.players.${playerIndex}.assists`, {
                      valueAsNumber: true,
                    })}
                  />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
