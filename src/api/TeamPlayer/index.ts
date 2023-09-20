import axios from '@/lib/axios';

import { PatchTeamPlayer } from './types';

export const patchTeamPlayer: PatchTeamPlayer = ({ id, body, config }) => {
  return axios.authorized().patch(`/team-player/${id}`, body, config);
};
