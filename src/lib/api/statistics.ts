import { DefaultStatisticFilterType, TotalAmountType } from '@/types/statistics';
import { apiClient } from '.';
import { IStatistic, IStatisticRequest } from '@/interfaces/statistics';

export const getTotalSumByArchiveType = (params: DefaultStatisticFilterType): Promise<TotalAmountType> => {
  return apiClient.get(`/statistic/total`, { params }).then((res) => res.data.data);
};

export const getRootTagStatisticListByArchiveType = (params: DefaultStatisticFilterType): Promise<IStatistic[]> => {
  return apiClient.get(`/statistic/tags`, { params }).then((res) => res.data.data);
};

export const getBasicTagStatisticListByArchiveType = (params: DefaultStatisticFilterType): Promise<IStatistic[]> => {
  return apiClient.get(`/statistic/tags/basic`, { params }).then((res) => res.data.data);
};

export const getTagStatisticByTag = (query: IStatisticRequest): Promise<IStatistic> => {
  const { tagID, ...params } = query;
  return apiClient.get(`/statistic/tags/${tagID}`, { params }).then((res) => res.data.data);
};
