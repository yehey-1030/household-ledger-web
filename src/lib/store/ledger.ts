'use client';

import { LedgerCreateParams, MonthYearType } from '@/types';
import { atom } from 'recoil';

export const defaultMonthYear: MonthYearType = {
  targetMonthYear: new Date(),
};

export const monthYearFilter = atom<MonthYearType>({
  key: 'monthYearFilter',
  default: defaultMonthYear,
});

export const defaultForm: LedgerCreateParams = {
  title: '',
  amount: 0,
  date: '',
  tagList: [],
  typeID: 2,
  memo: '',
  isExcluded: false,
};

export const ledgerForm = atom<LedgerCreateParams>({
  key: 'ledgerForm',
  default: defaultForm,
});
