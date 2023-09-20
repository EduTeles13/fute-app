import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { MutationConfig } from '@/lib/react-query';

import { patchTeamPlayer } from '..';
import { PatchTeamPlayer } from '../types';

type usePatchTeamPlayerFn = (args?: {
  queryConfig?: MutationConfig<PatchTeamPlayer>;
}) => UseMutationResult<
  Awaited<ReturnType<PatchTeamPlayer>>,
  AxiosError,
  Parameters<PatchTeamPlayer>[0],
  unknown
>;

export const usePatchTeamPlayer: usePatchTeamPlayerFn = ({ queryConfig = {} } = {}) => {
  return useMutation(['patch-team-player'], patchTeamPlayer, queryConfig);
};
