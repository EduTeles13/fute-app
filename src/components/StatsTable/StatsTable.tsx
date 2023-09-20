import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

type StatsTableProps = {
  data: { playerName: string; goals: number; assists: number }[];
};

export const StatsTable = ({ data }: StatsTableProps) => {
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
          {data.map((player, index) => {
            return (
              <Tr key={index} className="no-underline-row">
                <Td textAlign="center" border="none">
                  {player.playerName}
                </Td>
                <Td textAlign="center" border="none">
                  {player.goals}
                </Td>
                <Td textAlign="center" border="none">
                  {player.assists}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
