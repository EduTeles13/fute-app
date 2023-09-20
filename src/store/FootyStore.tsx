import { create } from 'zustand';

type Config = {
  name: string;
  location: string;
  startTime: string;
  endTime: string;
  playersPerTeam: number;
  teamsQty: number;
};

type Credentials = {
  email: string;
  username: string;
  password: string;
};

type FootyStoreType = {
  credentials: Credentials;
  footyInfo: Config;
  setFootyInfo: (config: Config) => void;
  setCredentials: (credentials: Credentials) => void;
};

export const useFootyStore = create<FootyStoreType>((set) => ({
  credentials: {
    email: '',
    username: '',
    password: '',
  },
  footyInfo: {
    name: '',
    location: '',
    startTime: '',
    endTime: '',
    playersPerTeam: 0,
    teamsQty: 0,
  },
  setFootyInfo: (footyInfo: Config) => {
    set((state) => ({
      ...state,
      footyInfo,
    }));
  },
  setCredentials: (credentials: Credentials) => {
    set((state) => ({
      ...state,
      credentials,
    }));
  },
}));
