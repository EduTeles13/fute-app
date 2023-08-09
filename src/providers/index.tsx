import { Session as SessionType } from 'next-auth';
import { ReactNode } from 'react';

import { Chakra } from './chakra';
import { ReactQuery } from './reactQuery';
import { Session } from './session';

export const Providers = ({ children, session }: { children: ReactNode; session: SessionType }) => {
  return (
    <Session session={session}>
      <ReactQuery>
        <Chakra>{children}</Chakra>
      </ReactQuery>
    </Session>
  );
};
