import { LedgerCreateParams, LedgerType } from '@/types/ledger';
import { apiClient } from '.';
import { formatDate, getFirstDay, getLastDay } from '../utils/string';

export const getCurrentMonthLedgers = (): Promise<LedgerType[]> => {
  return apiClient.get(`/ledgers/current`).then((res) => res.data.data);
};

export const postLedger = (params: LedgerCreateParams) => {
  return apiClient.post(`/ledgers`, params).then((res) => res.data);
};

export const deleteLedger = (param: number) => {
  return apiClient.delete(`ledgers/${param}`).then((res) => res.data);
};

export const getLedgersByMonth = (date: Date): Promise<LedgerType[]> => {
  const params = { start: formatDate(getFirstDay(date)), end: formatDate(getLastDay(date)) };
  return apiClient.get(`/ledgers`, { params }).then((res) => res.data.data);
};
