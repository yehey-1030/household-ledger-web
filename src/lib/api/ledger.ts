import { apiClient } from '.';

export const getCurrentMonthLedgers = () => {
  return apiClient.get(`/ledgers/current`).then((res) => res.data.data);
};
