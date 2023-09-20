import { theme } from '@chakra-ui/react';

import tailwindColors from './tailwindColors';

export const colors = {
  ...theme.colors,
  ...tailwindColors,
  primary: {
    100: '#1DD650',
  },
  gray: {
    ...tailwindColors.gray,
    25: 'rgba(0, 0, 0, 0.035)',
    50: 'rgba(0, 0, 0, 0.05)',
    100: 'rgba(0, 0, 0, 0.2)',
    200: 'rgba(0, 0, 0, 0.5)',
    400: '#212121',
  },
  background: '#FAFAFA',
  success: '#5AB116',
  error: '#CA133F',
  warning: '#D9A900',
};
