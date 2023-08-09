import { Session as SessionType } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

export const Session = ({ session, children }: { children: ReactNode; session: SessionType }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
