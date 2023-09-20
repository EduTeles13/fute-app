import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { MutationConfig } from '@/lib/react-query';

import { postFootyEvent } from '..';
import { PostFootyEventType } from '../types';

type UseCreateFootyEventFn = (args?: {
  queryConfig?: MutationConfig<PostFootyEventType>;
}) => UseMutationResult<
  Awaited<ReturnType<PostFootyEventType>>,
  AxiosError,
  Parameters<PostFootyEventType>[0],
  unknown
>;

export const useCreateFootyEvent: UseCreateFootyEventFn = ({ queryConfig = {} } = {}) => {
  return useMutation(['create-footy-event'], postFootyEvent, queryConfig);
};
