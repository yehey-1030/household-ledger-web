'use client';

import { LedgerCreateParams, TagType } from '@/types';
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { deleteLedger, getCurrentMonthLedgers, postLedger } from '../api/ledger';
import { formatDate } from '../utils/string';

export const useLedgerCreate = () => {
  const defaultForm = {
    title: '',
    amount: 0,
    date: '',
    tagList: [],
    typeID: 2,
    memo: '',
  };

  const [form, setForm] = useState<LedgerCreateParams>(defaultForm);

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

  const handleDateSelect = (date: Date, name: string) => {
    setForm((f) => ({ ...f, [name]: formatDate(date ?? new Date()) }));
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
    handleDateSelect,
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

export const useLedgerDelete = () => {
  const [deleteLedgerID, setDeleteLedgerID] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (param: number) => deleteLedger(param),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['ledgers', 'current'] });
      closeModal();
    },
    onError: () => {},
  });

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDeleteClicked = (ledgerID: number) => {
    setDeleteLedgerID(ledgerID);
    setModalOpen(true);
  };

  const handleSubmit = () => {
    if (deleteLedgerID === 0) {
      alert('error');
      closeModal();
    } else {
      mutate(deleteLedgerID);
      closeModal();
    }
  };

  return { isModalOpen, closeModal, handleDeleteClicked, handleSubmit };
};
