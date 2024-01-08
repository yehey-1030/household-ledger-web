import { IStatisticRequest, IStatistic } from '@/interfaces/statistics';

export type DefaultStatisticFilterType = Omit<IStatisticRequest, 'tagID'>;
export type TotalAmountType = Pick<IStatistic, 'totalAmount'>;
