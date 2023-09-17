import { create } from 'zustand';

type Config = {
  startTime: string;
  endTime: string;
  playersPerTeam: number;
  teamsQty: number;
};

type FootyEventStoreType = {
  config: Config;
  setConfig: (config: Config) => void;
};

export const useFootyEventStore = create<FootyEventStoreType>((set) => ({
  config: {
    startTime: '',
    endTime: '',
    playersPerTeam: 0,
    teamsQty: 0,
  },
  setConfig: (config: Config) => {
    set((state) => ({
      ...state,
      config,
    }));
  },
}));
