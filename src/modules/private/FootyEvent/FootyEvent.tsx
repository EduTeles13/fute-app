import {
  Flex,
  Text,
  Grid,
  GridItem,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { InputNumberField } from '@/components/InputNumberField';
import { ReturnButton } from '@/components/ReturnButton';

type FootyEventFormType = {
  teams: {
    teamName: string;
    victoriesQty: number;
    players: { name: string; goals: number; assistences: number }[];
  }[];
};

export const FootyEvent = () => {
  const { control } = useForm<FootyEventFormType>({
    mode: 'onChange',
    defaultValues: {
      teams: [
        {
          teamName: 'time1',
          victoriesQty: 2,
          players: [
            { name: 'luca' },
            { name: 'breno' },
            { name: 'guilherMe' },
            { name: 'eduardo' },
            { name: 'josef' },
          ],
        },
        {
          teamName: 'time2',
          victoriesQty: 0,
          players: [
            { name: 'rob' },
            { name: 'son' },
            { name: 'fidalgo' },
            { name: 'sqlJunior' },
            { name: 'joinshua' },
          ],
        },
      ],
    },
  });
  const { fields: teamsFields } = useFieldArray({ name: 'teams', control });

  const renderPlayerRows = (players) => {
    return players.map((player, playerIndex) => (
      <Tr key={playerIndex} className="no-underline-row">
        <Td textAlign="center" border="none">
          {player.name}
        </Td>
        <Td textAlign="center" border="none">
          <InputNumberField label="" />
        </Td>
        <Td textAlign="center" border="none">
          <InputNumberField label="" />
        </Td>
      </Tr>
    ));
  };

  return (
    <Flex flexDir="column" gap="3rem" mt="2rem" alignItems="center">
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={1}>
          <ReturnButton />
        </GridItem>
        <GridItem colSpan={3} display="flex" alignItems="center" justifyContent="center">
          <Text fontWeight="bold" fontSize="lg">
            Pelada DD/MM
          </Text>
        </GridItem>
        <GridItem />
      </Grid>
      {teamsFields.map((team, teamIndex) => (
        <Flex flexDir="column" gap="1rem" key={team.id} justifyContent="center" maxWidth="100%">
          <Grid templateColumns="repeat(5, 1fr)" alignItems="center">
            <Text fontWeight="bold" textAlign="center">
              {team.teamName}
            </Text>
            <Text fontWeight="bold">Vitórias</Text>
            <InputNumberField
              label=""
              name={`teams[${teamIndex}].victoriesQty`}
              control={control}
              defaultValue={team.victoriesQty}
            />
          </Grid>
          <TableContainer key={team.id} style={{ borderRadius: '20px' }}>
            <Table borderWidth="1px" borderColor="gray.300" style={{ tableLayout: 'fixed' }}>
              <Thead>
                <Tr>
                  <Th fontSize="10px" textAlign="center" border="none">
                    NOME
                  </Th>
                  <Th fontSize="10px" textAlign="center" border="none">
                    GOL
                  </Th>
                  <Th fontSize="10px" textAlign="center" border="none">
                    ASSISTÊNCIA
                  </Th>
                </Tr>
              </Thead>
              <Tbody>{renderPlayerRows(team.players)}</Tbody>
            </Table>
          </TableContainer>
        </Flex>
      ))}
    </Flex>
  );
};
