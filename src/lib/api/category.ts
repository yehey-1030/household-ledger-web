import { apiClient } from '.';
import { TagType } from '@/types/tag';

export const getCategories = (): Promise<TagType[]> => {
  return apiClient.get('/archive-types').then((res) => res.data.data);
};
