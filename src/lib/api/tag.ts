import { TagCreateParams, TagType } from '@/types/tag';
import { apiClient } from '.';

export const getRootTagList = (categoryID: number): Promise<TagType[]> => {
  return apiClient.get(`/archive-types/${categoryID}`).then((res) => res.data.data);
};

export const getChildTagList = (parentID: number): Promise<TagType[]> => {
  return apiClient.get(`/tags/${parentID}`).then((res) => res.data.data);
};

export const postTag = (params: TagCreateParams) => {
  return apiClient.post(`/tags`, params).then((res) => res.data);
};
