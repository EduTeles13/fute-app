import axios from '@/lib/axios';

import { PostFootyType } from './types';

export const postFooty: PostFootyType = ({ body, config }) => {
  return axios.authorized().post(`/footy`, body, config);
};
