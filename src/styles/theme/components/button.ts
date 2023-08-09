import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const ghost = defineStyle({
  color: 'gray.200',
  _hover: {
    bg: 'primary.300',
    color: 'white',
  },
  _active: {
    bg: 'primary.400',
    color: 'white',
  },
});

const light = defineStyle({
  bg: 'transparent',
  _hover: {
    bg: 'primary.100',
  },
  _active: {
    bg: 'primary.100',
  },
});

const primary = defineStyle({
  bg: 'primary.300',
  color: 'white',
  _hover: {
    bg: 'primary.400',
  },
  _active: {
    bg: 'primary.400',
  },
});

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'full',
  },
  variants: {
    ghost,
    light,
    primary,
  },
});
