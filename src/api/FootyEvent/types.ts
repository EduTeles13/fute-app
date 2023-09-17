import { AxiosRequestConfig } from 'axios';

export type Players = {
  monthlyPlayers: { name: string; presence: boolean; stars: number }[];
  dailyPlayers: { name: string; presence: boolean; stars: number }[];
};

export type PostFootyEventType = (args: {
  footyId: string;
  body: {
    startTime: string;
    endTime: string;
    teamsQty: number;
    playersPerTeam: number;
    players: Players;
  };
  config?: AxiosRequestConfig;
}) => Promise<any>;
