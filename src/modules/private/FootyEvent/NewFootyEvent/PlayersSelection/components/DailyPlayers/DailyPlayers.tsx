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

import { AddDailyPlayerModal } from './AddDailyPlayerModal/AddDailyPlayerModal';

type DailyPlayersProps = {
  control: Control<PlayerSelectionFormType>;
};

export const DailyPlayers = ({ control }: DailyPlayersProps) => {
  const { fields: dailyPlayers, append } = useFieldArray({ control, name: 'dailyPlayers' });

  return (
    <Flex flexDir="column" gap="1rem">
      <Text>Diaristas</Text>
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
            {dailyPlayers.map((player, index) => {
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
      <AddDailyPlayerModal append={append} />
    </Flex>
  );
};
