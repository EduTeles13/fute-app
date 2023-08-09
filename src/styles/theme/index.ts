import { extendTheme } from '@chakra-ui/react';
import { Quicksand } from 'next/font/google';

import { styles } from './chakra-styles';
import * as components from './components';
import { config } from './config';
import foundations from './foundations';

export const quicksand = Quicksand({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default extendTheme({
  config,
  styles,
  ...foundations,
  fonts: {
    body: quicksand.style.fontFamily,
    heading: quicksand.style.fontFamily,
  },
  components: { ...(components as any) },
});
