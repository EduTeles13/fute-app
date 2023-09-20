import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';

import { QueryConfig } from '@/lib/react-query';

import { getAllFootyEvent } from '..';

type UseGetFootyEventsFn = (args: {
  footyId: string;
  config?: AxiosRequestConfig;
  queryConfig?: QueryConfig<typeof getAllFootyEvent>;
}) => UseQueryResult<Awaited<ReturnType<typeof getAllFootyEvent>>>;

export const useGetAllFootyEvents: UseGetFootyEventsFn = ({ footyId, config, queryConfig }) => {
  return useQuery({
    queryKey: ['get-all-footy-events', footyId],
    queryFn: () => {
      return getAllFootyEvent({ footyId, config });
    },
    ...queryConfig,
  });
};
