import { AxiosRequestConfig } from 'axios';

type PlayerBody = { id?: string; name: string; stars: number; type: string };

export type PostFootyEventType = (args: {
  body: {
    footyId: string;
    startHour: string;
    endHour: string;
    numberOfTeams: number;
    playersPerTeam: number;
    players: PlayerBody[];
  };
  config?: AxiosRequestConfig;
}) => Promise<any>;

export type Footy = {
  id: string;
  created_at: string;
  updated_at: string;
  email: string;
  username: string;
  name: string;
  password: string;
  location: string;
  start_hour: string;
  end_hour: string;
  players_per_team: number;
  num_of_teams: number;
};

export type Player = {
  id: string;
  name: string;
  stars: number;
  goals: number;
  assists: number;
};

export type FootyEvent = {
  id: string;
  created_at: string;
  updated_at: string;
  start_hour: string;
  end_hour: string;
  footy_id: string;
  footy: Footy;
  teams: {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    footyEventId: string;
    victories: number;
    footyEvent: {
      id: string;
      created_at: string;
      updated_at: string;
      start_hour: string;
      end_hour: string;
      footy_id: string;
    };
    players: Player[];
  }[];
};

export type FootyEventsResponse = {
  data: FootyEvent[];
};

export type FootyEventResponse = {
  data: FootyEvent;
};
