import { IStatisticRequest, IStatistic } from '@/interfaces/statistics';

export type DefaultStatisticFilter = Omit<IStatisticRequest, 'tagID'>;
export type TotalAmountType = Pick<IStatistic, 'totalAmount'>;
