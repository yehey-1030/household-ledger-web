'use client';

import { LedgerCreateParams, TagType } from '@/types';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { getCurrentMonthLedgers, postLedger } from '../api/ledger';

export const useLedgerCreate = () => {
  // const queryClient = useQueryClient();
  const defaultForm = {
    title: '',
    amount: 0,
    date: '',
    tagList: [],
    typeID: 2,
    memo: '',
  };

  const [form, setForm] = useState<LedgerCreateParams>(defaultForm);

  // const [selectableTagList, setSelectableTagList] = useState<TagType[]>([]);
  const [checkValid, setCheckValid] = useState(false);

  const { mutate } = useMutation({
    mutationFn: (data: LedgerCreateParams) => postLedger(data),
    onSuccess: () => {
      alert('내역 저장 완료');
      setForm(defaultForm);
    },
    onError: () => {
      alert('내역 저장 실패');
    },
  });

  useEffect(() => {
    checkFormValid();
  }, [form]);

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
    setForm((f) => ({ ...f, typeID: categoryID, tagList: [] }));
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
      mutate(form);
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

export const useLedgerList = () => {
  const { data: ledgersData } = useSuspenseQuery({
    queryKey: ['ledgers', 'current'],
    queryFn: () => getCurrentMonthLedgers(),
  });

  return { ledgersData };
};
