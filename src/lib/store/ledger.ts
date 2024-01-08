'use client';

import { MonthYearType } from '@/types';
import { atom } from 'recoil';

export const defaultMonthYear: MonthYearType = {
  targetMonthYear: new Date(),
};

export const monthYearFilter = atom<MonthYearType>({
  key: 'monthYearFilter',
  default: defaultMonthYear,
});
