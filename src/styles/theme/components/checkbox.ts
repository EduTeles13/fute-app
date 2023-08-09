import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys,
);

const baseStyle = definePartsStyle({
  control: {
    borderColor: 'gray.100',
    backgroundColor: 'gray.25',
    boxSize: 5,
  },
});

const graySquare = definePartsStyle({
  control: {
    _checked: {
      backgroundColor: 'brand.blue.lightBg',
      borderColor: 'primary.400',
      _hover: {
        backgroundColor: 'brand.blue.lightBg',
        borderColor: 'primary.400',
      },
    },
  },
  icon: {
    color: 'primary.400',
  },
});

const grayRounded = definePartsStyle({
  container: {
    boxSize: 6,
    border: '2px',
    borderColor: 'gray.100',
    backgroundColor: 'gray.25',
    padding: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    _checked: {
      borderColor: 'primary.400',
      _hover: {
        borderColor: 'primary.400',
      },
    },
  },
  control: {
    boxSize: 3,
    borderRadius: 20,
    border: 'none',
    _checked: {
      backgroundColor: 'primary.400',
      borderColor: 'primary.400',
      _hover: {
        backgroundColor: 'primary.400',
        borderColor: 'primary.400',
      },
    },
  },
  icon: {
    color: 'transparent',
  },
});

export const Checkbox = defineMultiStyleConfig({
  baseStyle,
  variants: {
    graySquare,
    grayRounded,
  },
  defaultProps: {
    variant: 'graySquare',
    size: 'md',
  },
});
