import { QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react';

import { queryClient } from '@/lib/react-query';

export const ReactQuery = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
