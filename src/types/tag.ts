export type CategoryType = {
  archiveTypeID: number;
  name: string;
};

export type TagType = {
  tagID: number;
  name: string;
  archiveTypeID?: number;
  parentID?: number;
};

export type ArchiveType = {
  archiveTypeID: number;
  name: string;
};

export type TagCreateParams = {
  archiveTypeID: number;
  name: string;
  parentID?: number;
};
