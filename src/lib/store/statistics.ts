'use client';

import { DefaultStatisticFilterType } from '@/types/statistics';
import { atom, selector } from 'recoil';
import { formatDate, getFirstDay, getLastDay } from '../utils/string';
import { getValidKey } from '@/styles/color';

export const defaultStaticFilterInitialValue: DefaultStatisticFilterType = {
  start: formatDate(getFirstDay(new Date())),
  end: formatDate(getLastDay(new Date())),
  archiveTypeID: 0,
};

export const defaultStatisticFilter = atom<DefaultStatisticFilterType>({
  key: 'defaultFilter',
  default: defaultStaticFilterInitialValue,
});

export const currentArchiveTypeColor = selector({
  key: 'currentColor',
  get: ({ get }) => getValidKey(get(defaultStatisticFilter).archiveTypeID.toString()),
});
