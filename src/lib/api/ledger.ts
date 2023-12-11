import { LedgerCreateParams } from '@/types/ledger';
import { apiClient } from '.';

export const getCurrentMonthLedgers = () => {
  return apiClient.get(`/ledgers/current`).then((res) => res.data.data);
};

export const postLedger = (params: LedgerCreateParams) => {
  return apiClient.post(`/ledgers`, params).then((res) => res.data);
};
