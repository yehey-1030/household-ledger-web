import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { defaultStatisticFilter } from '../store';
import {
  getBasicTagStatisticListByArchiveType,
  getRootTagStatisticListByArchiveType,
  getTagStatisticByTag,
  getTotalSumByArchiveType,
} from '../api/statistics';
import { DefaultStatisticFilterType } from '@/types/statistics';
import { useChildTags } from './tag';
import { useState } from 'react';

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

  const basicFilter: DefaultStatisticFilterType = {
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

export const useTagStatistic = (tagID: number) => {
  const filter = useRecoilValue(defaultStatisticFilter);

  const { data: tagStatistic } = useQuery({
    queryKey: ['statistic', filter.start, filter.end, tagID],
    queryFn: () =>
      getTagStatisticByTag({ tagID, start: filter.start, end: filter.end, archiveTypeID: filter.archiveTypeID }),
  });

  return { tagStatistic };
};

export const useSelectDetailTagStatistic = (currentTag: number) => {
  const { childTagList } = useChildTags(currentTag);
  const [selectedList, setSelectedList] = useState<number[]>([]);

  const isSelected = (tagID: number) => {
    return selectedList.includes(tagID);
  };

  const handleHashTagClicked = (tagID: number) => {
    if (isSelected(tagID)) {
      setSelectedList(selectedList.filter((tag) => tag !== tagID));
    } else {
      setSelectedList((prev) => [...prev, tagID]);
    }
  };

  return { childTagList, selectedList, isSelected, handleHashTagClicked };
};
