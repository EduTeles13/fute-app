import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { MutationConfig } from '@/lib/react-query';

import { postFooty } from '..';
import { PostFootyType } from '../types';

type UseCreateFootyFn = (args?: {
  queryConfig?: MutationConfig<PostFootyType>;
}) => UseMutationResult<
  Awaited<ReturnType<PostFootyType>>,
  AxiosError,
  Parameters<PostFootyType>[0],
  unknown
>;

export const useCreateFooty: UseCreateFootyFn = ({ queryConfig = {} } = {}) => {
  return useMutation(['create-footy-event'], postFooty, queryConfig);
};
