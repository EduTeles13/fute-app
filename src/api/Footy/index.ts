import { AxiosRequestConfig } from 'axios';

import axios from '@/lib/axios';

import { PostFootyType } from './types';

export const postFooty: PostFootyType = ({ body, config }) => {
  return axios.unauthorized().post(`/footy`, body, config);
};

export const getFootyStatistics = ({
  id,
  config,
}: {
  id: string;
  config?: AxiosRequestConfig;
}): Promise<{ data: { playerName: string; goals: number; assists: number }[] }> => {
  return axios.unauthorized().get(`/statistics/footy/${id}`, config);
};
