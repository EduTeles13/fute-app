import { Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { CButton } from '@/components/CButton';
import { InputTextField } from '@/components/InputTextField';
import { ReturnButton } from '@/components/ReturnButton';

import { PlayersTable } from './PlayersTable';

export type FootyEventFormType = {
  teams: {
    teamName: string;
    victoriesQty: number;
    players: { name: string; goals: number; assists: number }[];
  }[];
};

export const FootyEvent = () => {
  const { control, register, handleSubmit } = useForm<FootyEventFormType>({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
    defaultValues: {
      teams: [
        {
          teamName: 'Time1',
          victoriesQty: 2,
          players: [
            { name: 'luca', goals: 5, assists: 3 },
            { name: 'breno', goals: 5, assists: 3 },
            { name: 'guilherMe', goals: 5, assists: 3 },
            { name: 'eduardo', goals: 5, assists: 3 },
            { name: 'josef', goals: 5, assists: 3 },
          ],
        },
        {
          teamName: 'Time2',
          victoriesQty: 0,
          players: [
            { name: 'rob', goals: 5, assists: 3 },
            { name: 'son', goals: 5, assists: 3 },
            { name: 'fidalgo', goals: 5, assists: 3 },
            { name: 'sqlJunior', goals: 5, assists: 3 },
            { name: 'joinshua', goals: 5, assists: 3 },
          ],
        },
      ],
    },
  });
  const { fields: teamsFields } = useFieldArray({ name: 'teams', control });

  const handleFinishEvent = (data: FootyEventFormType) => {
    console.log(data);
  };

  return (
    <Flex flexDir="column" height="100%" justifyContent="space-between">
      <Flex flexDir="column" mt="2rem" gap="1rem">
        <Grid templateColumns="repeat(4, 1fr)">
          <GridItem colSpan={1}>
            <ReturnButton />
          </GridItem>
          <GridItem colSpan={2} display="flex" alignItems="center" justifyContent="center">
            <Text fontWeight="bold" fontSize="lg">
              Pelada da Urna
            </Text>
          </GridItem>
          <GridItem />
        </Grid>
        <Flex
          flexDir="column"
          gap="2rem"
          justifyContent="flex-start"
          as="form"
          onSubmit={handleSubmit(handleFinishEvent)}
        >
          {teamsFields.map((team, teamIndex) => (
            <Flex flexDir="column" gap="1rem" key={team.id} justifyContent="center" maxWidth="100%">
              <Flex justifyContent="flex-start" alignItems="center" gap="2rem">
                <Text fontWeight="bold" textAlign="center">
                  {team.teamName}
                </Text>
                <Flex gap="1rem" alignItems="center">
                  <Text fontWeight="bold">Vitórias</Text>
                  <InputTextField
                    type="number"
                    label=""
                    {...register(`teams.${teamIndex}.victoriesQty`, {
                      valueAsNumber: true,
                    })}
                  />
                </Flex>
              </Flex>
              <PlayersTable index={teamIndex} control={control} register={register} />
            </Flex>
          ))}

          <CButton label="Finalizar" type="submit" />
        </Flex>
      </Flex>
    </Flex>
  );
};
