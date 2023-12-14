import { LedgerCreateParams, LedgerType } from '@/types/ledger';
import { apiClient } from '.';

export const getCurrentMonthLedgers = (): Promise<LedgerType[]> => {
  return apiClient.get(`/ledgers/current`).then((res) => res.data.data);
};

export const postLedger = (params: LedgerCreateParams) => {
  return apiClient.post(`/ledgers`, params).then((res) => res.data);
};
