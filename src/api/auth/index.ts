import axios from '@/lib/axios';

import { PostAuthFn } from './types';

export const postAuth: PostAuthFn = ({ body, config }) => {
  return axios.unauthorized().post(`/auth`, body, config);
};
