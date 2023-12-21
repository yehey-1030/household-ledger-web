import { DefaultStatisticFilter } from '@/types/statistics';
import { atom } from 'recoil';
import { formatDate, getFirstDay, getLastDay } from '../utils/string';

export const defaultStaticFilterInitialValue: DefaultStatisticFilter = {
  start: formatDate(getFirstDay(new Date())),
  end: formatDate(getLastDay(new Date())),
  archiveTypeID: 0,
};

export const defaultStatisticFilter = atom<DefaultStatisticFilter>({
  key: 'defaultFilter',
  default: defaultStaticFilterInitialValue,
});
