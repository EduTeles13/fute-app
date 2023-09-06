import { Box, Text, Center, Input } from '@chakra-ui/react';
import React, { useRef } from 'react';

export const FileUploadForm = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileDrop = (_e: React.DragEvent) => {};

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleInputChange = (_e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <Center>
      <Box
        p={4}
        borderWidth="2px"
        borderRadius="md"
        bgColor="gray.300"
        borderColor="gray.300"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleFileDrop}
        display="flex"
        alignItems="center"
        cursor="pointer"
        textAlign="center"
        w="13rem"
        h="70px"
      >
        <Box
          w="100%"
          h="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          onClick={handleFileSelect}
        >
          <Text fontSize="lg">Arraste até aqui ou</Text>
          <Text as="u" fontWeight="bold" fontSize="lg">
            escolha um arquivo
          </Text>
        </Box>
        <Input
          type="file"
          id="fileInput"
          accept=".jpg, .jpeg, .png"
          style={{ display: 'none' }}
          onChange={handleInputChange}
          ref={fileInputRef}
        />
      </Box>
    </Center>
  );
};
