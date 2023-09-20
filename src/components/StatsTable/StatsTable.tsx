import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

const mockData = [
  { name: 'breno', goals: 2, assists: 5 },
  { name: 'breno', goals: 2, assists: 5 },
  { name: 'breno', goals: 2, assists: 5 },
];

export const StatsTable = () => {
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
          {mockData.map((player, index) => {
            return (
              <Tr key={index} className="no-underline-row">
                <Td textAlign="center" border="none">
                  {player.name}
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
