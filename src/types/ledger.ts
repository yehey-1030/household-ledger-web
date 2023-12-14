import { ArchiveType, TagType } from './tag';

export type LedgerCreateParams = {
  title: string;
  typeID: number;
  amount: number;
  date: string;
  tagList: number[];
  memo?: string;
};

export type LedgerType = {
  ledgerID: number;
  title: string;
  date: string;
  amount: number;
  memo: string | null;
  archiveType: ArchiveType;
  tagList: TagType[];
};
