import axios from '@/lib/axios';

import { PostFootyEventType } from './types';

export const postFootyEvent: PostFootyEventType = ({ footyId, body, config }) => {
  return axios.authorized().post(`/footy-event/${footyId}`, body, config);
};
