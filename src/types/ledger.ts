export type LedgerCreateParams = {
  title: string;
  typeID: number;
  amount: number;
  date: string;
  tagList: number[];
  memo?: string;
};
