import { ArchiveType } from '.';

export type DefaultStatisticFilter = { start: string; end: string } & Pick<ArchiveType, 'archiveTypeID'>;
