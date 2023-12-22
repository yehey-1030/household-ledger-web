export interface IStatistic {
  tagName: string;
  tagID: number;
  totalAmount: number;
  ledgerList: number[];
}

export interface IStatisticRequest {
  tagID: number;
  start: string;
  end: string;
  archiveTypeID: number;
}
