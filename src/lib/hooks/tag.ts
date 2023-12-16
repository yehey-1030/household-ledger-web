'use client';

import { useQueries, useQuery } from '@tanstack/react-query';
import { getChildTagList, getRootTagList } from '../api/tag';
import { useEffect, useState } from 'react';
import { TagType } from '@/types';

export const useRootTag = (typeID: number) => {
  const { data: selectableTagList } = useQuery({
    queryKey: ['rootTag', typeID],
    queryFn: () => getRootTagList(typeID),
  });

  return { selectableTagList };
};

export const useChildTags = (parentID: number) => {
  const { data: childTagList } = useQuery({
    queryKey: ['childTag', parentID],
    queryFn: () => getChildTagList(parentID),
  });

  return { childTagList };
};

export const useBasicTags = (typeID: number) => {
  const { data: basicTags } = useQuery({
    queryKey: ['rootTag', 6],
    queryFn: () => getRootTagList(6),
    enabled: typeID === 3,
  });

  return { basicTags };
};

export const useChildTagList = (tagList: number[]) => {
  const [childTagList, setChildTagList] = useState<TagType[]>([]);

  const queryResult = useQueries({
    queries: tagList.map((tag) => {
      return { queryKey: ['childTag', tag], queryFn: () => getChildTagList(tag) };
    }),
    combine: (results) => {
      return {
        data: results.map((result) => {
          return result.data;
        }),
        pending: results.some((result) => result.isPending),
      };
    },
  });

  useEffect(() => {
    setChildTagList([]);
    queryResult.data.forEach((r) => {
      if (r) {
        setChildTagList((prev) => [...prev, ...r]);
      }
    });
  }, [queryResult.data]);

  return { childTagList };
};
