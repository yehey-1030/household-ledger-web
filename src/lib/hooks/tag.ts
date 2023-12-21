'use client';

import { useMutation, useQueries, useQuery, useQueryClient } from '@tanstack/react-query';
import { getChildTagList, getRootTagList, postTag } from '../api/tag';
import { useEffect, useState } from 'react';
import { TagCreateParams, TagType } from '@/types';

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
    queryKey: ['rootTag', 'basic'],
    // basic tag id 고정 필요
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

export const useTagCreate = () => {
  const defaultForm = {
    archiveTypeID: 2,
    name: '',
    parentID: 0,
  };

  const [tagForm, setTagForm] = useState<TagCreateParams>(defaultForm);
  const [isValid, setValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const queryClient = useQueryClient();

  useEffect(() => {
    setValid(true);
    if (tagForm.name === '') {
      setValid(false);
    } else if (tagForm.archiveTypeID === 0) {
      setValid(false);
    } else if (tagForm.parentID === 0) {
      const { parentID, ...form } = tagForm;
      setTagForm(form);
    }
    console.log(tagForm);
  }, [tagForm]);

  const { mutate } = useMutation({
    mutationFn: (data: TagCreateParams) => postTag(data),
    onSuccess: () => {
      setTagForm(defaultForm);
      if (tagForm.parentID) {
        queryClient.invalidateQueries({ queryKey: ['childTag', tagForm.parentID] });
      }
      queryClient.invalidateQueries({ queryKey: ['rootTag', tagForm.archiveTypeID] });
      closeModal();
    },
    onError: () => {
      alert('태그 생성 실패');
    },
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const setArchvieType = (typeID: number) => {
    setTagForm((prev) => ({ ...prev, archiveTypeID: typeID }));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagForm((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleParentTagSelect = (parentID: number) => {
    setTagForm((prev) => ({ ...prev, parentID }));
  };

  const handleSubmit = () => {
    if (isValid) {
      mutate(tagForm);
    } else {
      alert('이름을 채워주세요');
    }
  };
  return {
    tagForm,
    isModalOpen,
    openModal,
    closeModal,
    setArchvieType,
    handleNameChange,
    handleParentTagSelect,
    handleSubmit,
  };
};
