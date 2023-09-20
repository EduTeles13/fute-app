import axios from '@/lib/axios';

import { PostFootyType } from './types';

export const postFooty: PostFootyType = ({ body, config }) => {
  return axios.unauthorized().post(`/footy`, body, config);
};

export const getFooty: PostFootyType = ({ config }) => {
  return axios.unauthorized().get(`/footy`, config);
};
