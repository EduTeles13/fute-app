import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import { CButton } from '@/components/CButton';

export const PopUp = ({ header, content, button }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="bold">{header}</ModalHeader>
          <ModalBody>{content}</ModalBody>
          <ModalFooter>
            <CButton label="Prosseguir" borderRadius="md" colorScheme="blue" onClick={onClose}>
              {button}
            </CButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
