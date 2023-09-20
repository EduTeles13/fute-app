import { AxiosRequestConfig } from 'axios';

import axios from '@/lib/axios';

import { FootyEventResponse, FootyEventsResponse, PostFootyEventType } from './types';

export const postFootyEvent: PostFootyEventType = ({ body, config }) => {
  return axios.authorized().post(`/footy-event`, body, config);
};

export const getAllFootyEvent = ({
  footyId,
  config,
}: {
  footyId: string;
  config?: AxiosRequestConfig;
}): Promise<FootyEventsResponse> => {
  return axios.unauthorized().get(`/footy-event/all/${footyId}`, config);
};

export const getFootyEvent = ({
  id,
  config,
}: {
  id: string;
  config?: AxiosRequestConfig;
}): Promise<FootyEventResponse> => {
  return axios.unauthorized().get(`/footy-event/${id}`, config);
};
