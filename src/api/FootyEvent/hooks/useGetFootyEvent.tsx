import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';

import { QueryConfig } from '@/lib/react-query';

import { getFootyEvent } from '..';

type UseGetFootyEventFn = (args: {
  id: string;
  config?: AxiosRequestConfig;
  queryConfig?: QueryConfig<typeof getFootyEvent>;
}) => UseQueryResult<Awaited<ReturnType<typeof getFootyEvent>>>;

export const useGetFootyEvent: UseGetFootyEventFn = ({ id, config, queryConfig }) => {
  return useQuery({
    queryKey: ['get-footy-event', id],
    queryFn: () => {
      return getFootyEvent({ id, config });
    },
    ...queryConfig,
  });
};
