'use client';

import { DefaultStatisticFilterType } from '@/types/statistics';
import { atom } from 'recoil';
import { formatDate, getFirstDay, getLastDay } from '../utils/string';

export const defaultStaticFilterInitialValue: DefaultStatisticFilterType = {
  start: formatDate(getFirstDay(new Date())),
  end: formatDate(getLastDay(new Date())),
  archiveTypeID: 0,
};

export const defaultStatisticFilter = atom<DefaultStatisticFilterType>({
  key: 'defaultFilter',
  default: defaultStaticFilterInitialValue,
});
