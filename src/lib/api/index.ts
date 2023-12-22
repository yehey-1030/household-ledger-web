import axios from 'axios';
import qs from 'qs';

export const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/api`,
  withCredentials: true,
});
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params);
};
