import { AxiosRequestConfig } from 'axios';

type Player = {
  id: string;
  created_at: string;
  updated_at: string;
  footy_id: string;
  name: string;
  stars: number;
  type: string;
};

type FootyEvent = {
  id: string;
  created_at: string;
  updated_at: string;
  start_hour: string;
  end_hour: string;
  footy_id: string;
};

export type User = {
  id: string;
  created_at: string;
  updated_at: string;
  email: string;
  username: string;
  name: string;
  location: string;
  start_hour: string;
  end_hour: string;
  players_per_team: number;
  num_of_teams: number;
  footy_event: FootyEvent[];
  players: Player[];
};

type AuthBody = {
  username: string;
  password: string;
};

export type AuthUser = {
  id: string;
  email: string;
  name: string;
};

export type LoginResponse = {
  message: string;
  data: {
    id: string;
    user: User;
    access_token: string;
  };
};

export type PostAuthFn = (args: {
  body: AuthBody;
  config?: AxiosRequestConfig<AuthBody>;
}) => Promise<LoginResponse>;
