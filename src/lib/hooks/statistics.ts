import { useSuspenseQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { defaultStatisticFilter } from '../store/statistics';
import {
  getBasicTagStatisticListByArchiveType,
  getRootTagStatisticListByArchiveType,
  getTotalSumByArchiveType,
} from '../api/statistics';
import { DefaultStatisticFilter } from '@/types/statistics';

export const useTotalSum = () => {
  const filter = useRecoilValue(defaultStatisticFilter);

  const { data: totalAmount } = useSuspenseQuery({
    queryKey: ['totalAmount', filter.archiveTypeID, filter.start, filter.end],
    queryFn: () => getTotalSumByArchiveType(filter),
  });

  return { totalAmount };
};

export const useRootTagStatisticList = () => {
  const filter = useRecoilValue(defaultStatisticFilter);

  const { data: statisticList } = useSuspenseQuery({
    queryKey: ['statisticList', filter.archiveTypeID, filter.start, filter.end],
    queryFn: () => getRootTagStatisticListByArchiveType(filter),
  });

  return { statisticList };
};

export const useBasicTagStatisticList = () => {
  const filter = useRecoilValue(defaultStatisticFilter);

  const basicFilter: DefaultStatisticFilter = {
    start: filter.start,
    end: filter.end,
    archiveTypeID: 3,
  };

  const { data: basicStatisticList } = useSuspenseQuery({
    queryKey: ['statisticList', 'basic', filter.start, filter.end],
    queryFn: () => getBasicTagStatisticListByArchiveType(basicFilter),
  });

  return { basicStatisticList };
};
