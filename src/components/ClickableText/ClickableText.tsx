// components/ClickableText.tsx

import { Text } from '@chakra-ui/react';
import Link from 'next/link';

interface ClickableTextProps {
  text: string;
  href: string;
}

export const ClickableText: React.FC<ClickableTextProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <Text textDecoration="underline" lineHeight="10">
        {text}
      </Text>
    </Link>
  );
};
