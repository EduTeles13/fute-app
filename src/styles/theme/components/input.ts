import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys,
);

const outline = definePartsStyle({
  field: {
    borderRadius: 'full',
    borderColor: 'gray.100',
  },
  element: {
    color: 'gray.200',
  },
});

export const Input = defineMultiStyleConfig({
  variants: {
    outline,
  },
});
