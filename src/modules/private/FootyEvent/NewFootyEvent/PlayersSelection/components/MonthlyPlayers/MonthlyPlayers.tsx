import {
  Flex,
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
import { Control, Controller, useFieldArray } from 'react-hook-form';

import { PlayerSelectionFormType } from '../../PlayersSelection';

type MonthlyPlayersProps = {
  control: Control<PlayerSelectionFormType>;
};

export const MonthlyPlayers = ({ control }: MonthlyPlayersProps) => {
  const { fields: monthlyPlayers } = useFieldArray({ control, name: 'monthlyPlayers' });

  return (
    <Flex flexDir="column" gap="1rem">
      <Text>Mensalistas</Text>
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
                PRESENÇA
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {monthlyPlayers.map((player, index) => {
              return (
                <Tr key={player.id} className="no-underline-row">
                  <Td textAlign="center" border="none">
                    {player.name}
                  </Td>
                  <Td textAlign="center" border="none">
                    {player.stars}
                  </Td>
                  <Td textAlign="center" border="none">
                    <Controller
                      name={`monthlyPlayers.${index}.presence`}
                      control={control}
                      render={({ field }) => (
                        <Switch
                          colorScheme="green"
                          isChecked={field.value}
                          onChange={(value) => {
                            field.onChange(value.target.checked);
                          }}
                        />
                      )}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};
