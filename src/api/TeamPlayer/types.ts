import { AxiosRequestConfig } from 'axios';

type TeamPlayerBody = {
  teamId: string;
  playerId: string;
  goals: number | null;
  assists: number | null;
};

export type PatchTeamPlayer = (args: {
  id: string;
  body: TeamPlayerBody;
  config: AxiosRequestConfig<TeamPlayerBody>;
}) => Promise<TeamPlayerBody & { id: string }>;
