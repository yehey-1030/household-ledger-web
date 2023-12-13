'use client';

import { LedgerCreateParams } from '@/types/ledger';
import { TagType } from '@/types/tag';
import React, { useEffect, useState } from 'react';

export const useLedgerCreate = () => {
  // const queryClient = useQueryClient();
  const defaultForm = {
    title: '',
    amount: 0,
    date: '',
    tagList: [],
    typeID: 2,
  };

  const [form, setForm] = useState<LedgerCreateParams>(defaultForm);

  // const [selectableTagList, setSelectableTagList] = useState<TagType[]>([]);
  const [checkValid, setCheckValid] = useState(false);

  useEffect(() => {
    checkFormValid();
  });

  const checkFormValid = () => {
    setCheckValid(true);

    if (form.title === '') {
      setCheckValid(false);
    } else if (form.amount === 0 || Number.isNaN(form.amount)) {
      setCheckValid(false);
    } else if (form.date === '') {
      setCheckValid(false);
    } else if (form.tagList.length === 0) {
      setCheckValid(false);
    }
  };

  const handleCategorySelect = (categoryID: number) => {
    setForm((f) => ({ ...f, typeID: categoryID }));
  };

  const handleRootTagSelect = (tagID: number) => {
    setForm((f) => ({ ...f, tagList: [tagID] }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'amount') {
      setForm((f) => ({ ...f, [name]: parseInt(value, 10) }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleHashTagSelect = (tag: TagType, currentTags: TagType[]) => {
    if (form.tagList.includes(tag.tagID)) {
      const filterList = currentTags.filter((t) => t.parentID === tag.tagID).map((t) => t.tagID);

      setForm((f) => ({ ...f, tagList: form.tagList.filter((t) => t !== tag.tagID && !filterList.includes(t)) }));
    } else {
      setForm((f) => ({ ...f, tagList: [...form.tagList, tag.tagID] }));
    }
  };

  const handleSubmit = () => {
    if (checkValid) {
      alert('내역 저장 완료');
      setForm(defaultForm);
    }
  };

  return {
    form,
    handleInputChange,
    handleCategorySelect,
    handleRootTagSelect,
    handleHashTagSelect,
    checkValid,
    onSubmit: handleSubmit,
  };
};
