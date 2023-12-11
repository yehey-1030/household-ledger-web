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
