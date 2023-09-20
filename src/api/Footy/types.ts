import { AxiosRequestConfig } from 'axios';

export type PostFootyType = (args: { body: any; config?: AxiosRequestConfig }) => Promise<any>;
