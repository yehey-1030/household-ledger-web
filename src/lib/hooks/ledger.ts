'use client';

import { LedgerCreateParams } from '@/types/ledger';
import React, { useEffect, useState } from 'react';

export const useLedgerCreate = () => {
  // const queryClient = useQueryClient();
  const [form, setForm] = useState<LedgerCreateParams>({
    title: '',
    amount: 0,
    date: '',
    tagList: [],
    typeID: 2,
  });

  // const [selectableTagList, setSelectableTagList] = useState<TagType[]>([]);
  const [checkValid, setCheckValid] = useState(false);

  const handleCategorySelect = (categoryID: number) => {
    setForm((f) => ({ ...f, typeID: categoryID }));
    setCheckValid(true);
  };

  const handleRootTagSelect = (tagID: number) => {
    setForm((f) => ({ ...f, tagList: [tagID] }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleHashTagSelect = (tagID: number) => {
    if (form.tagList.includes(tagID)) {
      setForm((f) => ({ ...f, tagList: form.tagList.filter((t) => t !== tagID) }));
    } else {
      setForm((f) => ({ ...f, tagList: [...form.tagList, tagID] }));
    }
  };

  const checkHashTagSelected = (tagID: number) => {
    return form.tagList.includes(tagID);
  };

  const updateTagList = (tagList: number[]) => {
    setForm((f) => ({ ...f, tagList }));
  };

  useEffect(() => {});

  return {
    form,
    handleInputChange,
    handleCategorySelect,
    handleRootTagSelect,
    handleHashTagSelect,
    checkHashTagSelected,
    updateTagList,
    checkValid,
    setCheckValid,
  };
};
