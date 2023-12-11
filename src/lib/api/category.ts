import { apiClient } from '.';
import { CategoryType } from '@/types/tag';

export const getCategories = (): Promise<CategoryType[]> => {
  return apiClient.get('/archive-types').then((res) => res.data.data);
};
