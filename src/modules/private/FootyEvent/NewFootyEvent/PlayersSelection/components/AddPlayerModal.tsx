import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { PlusCircle } from 'lucide-react';
import { UseFieldArrayAppend, useController, useForm } from 'react-hook-form';

import { CButton } from '@/components/CButton';
import { InputTextField } from '@/components/InputTextField';

import { PlayerSelectionFormType } from '../PlayersSelection';

import { validator } from './validator';

type AddPlayerFormType = {
  name: string;
  isMonthlyPlayer: boolean;
  stars: number;
};

type AddPlayerModalProps = {
  append: UseFieldArrayAppend<PlayerSelectionFormType, 'players'>;
};

export const AddPlayerModal = ({ append }: AddPlayerModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddPlayerFormType>({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(validator),
  });
  const { field } = useController({ name: 'isMonthlyPlayer', control, defaultValue: false });

  const appendPlayer = (data: AddPlayerFormType) => {
    append({ ...data });
    reset();
    onClose();
  };

  return (
    <>
      <Flex justifyContent="flex-start" alignItems="center" gap="1rem">
        <Text>Adicionar jogador</Text>
        <PlusCircle size={30} onClick={onOpen} />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(appendPlayer)}>
          <ModalHeader>Adicionar jogador</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir="column" gap="1rem">
              <InputTextField
                label="Nome"
                errorMessage={errors.name?.message}
                {...register('name')}
              />
              <InputTextField
                label="Estrelas"
                type="number"
                errorMessage={errors.stars?.message}
                {...register('stars', {
                  valueAsNumber: true,
                })}
              />
              <Flex justifyContent="space-between">
                <Text>Mensalista</Text>
                <Switch
                  colorScheme="green"
                  isChecked={field.value}
                  onChange={(value) => {
                    field.onChange(value.target.checked);
                  }}
                />
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button type="button" variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <CButton type="submit" label="Criar" borderRadius="md" />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
