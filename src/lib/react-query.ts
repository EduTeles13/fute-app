import {
  DefaultOptions,
  QueryClient,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type QueryConfig<FetcherFnType extends (...args: any) => any> = UseQueryOptions<
  Awaited<ReturnType<FetcherFnType>>
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MutationConfig<FetcherFnType extends (...args: any) => any> = UseMutationOptions<
  Awaited<ReturnType<FetcherFnType>>,
  AxiosError,
  Parameters<FetcherFnType>[0]
>;
