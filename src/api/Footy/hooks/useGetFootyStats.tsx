import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';

import { QueryConfig } from '@/lib/react-query';

import { getFootyStatistics } from '..';

type useGetFootyStatsFn = (args: {
  id: string;
  config?: AxiosRequestConfig;
  queryConfig?: QueryConfig<typeof getFootyStatistics>;
}) => UseQueryResult<Awaited<ReturnType<typeof getFootyStatistics>>>;

export const useGetFootyStats: useGetFootyStatsFn = ({ id, config, queryConfig }) => {
  return useQuery({
    queryKey: ['get-footy-stats', id],
    queryFn: () => {
      return getFootyStatistics({ id, config });
    },
    ...queryConfig,
  });
};
