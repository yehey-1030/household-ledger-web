'use client';

import { LedgerCreateParams, TagType } from '@/types';
import { useMutation, useQueryClient, useSuspenseQueries, useSuspenseQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { deleteLedger, getLedgerByID, getLedgersByMonth, postLedger, putLedger } from '../api/ledger';
import { formatDate } from '../utils/string';
import { useRecoilState, useRecoilValue } from 'recoil';
import { defaultForm, ledgerForm, monthYearFilter } from '../store';
import { useRouter } from 'next/navigation';

export const useLedgerForm = () => {
  const [form, setForm] = useRecoilState(ledgerForm);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    checkFormValid();
  }, [form]);

  const checkFormValid = () => {
    setIsValid(true);

    if (form.title === '') {
      setIsValid(false);
    } else if (form.amount === 0 || Number.isNaN(form.amount)) {
      setIsValid(false);
    } else if (form.date === '') {
      setIsValid(false);
    } else if (form.tagList.length === 0) {
      setIsValid(false);
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

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((f) => ({ ...f, [name]: checked }));
  };

  return {
    handleInputChange,
    handleCategorySelect,
    handleRootTagSelect,
    handleHashTagSelect,
    handleDateSelect,
    handleCheckBox,
    isValid,
  };
};

export const useLedgerCreate = () => {
  const queryClient = useQueryClient();

  const [form, setForm] = useRecoilState(ledgerForm);

  useEffect(() => {
    setForm(defaultForm);
  }, []);

  const { mutate } = useMutation({
    mutationFn: (data: LedgerCreateParams) => postLedger(data),
    onSuccess: () => {
      alert('내역 저장 완료');
      const date = form.date.split('-').map(Number);
      queryClient.invalidateQueries({ queryKey: ['ledgers', date[0], date[1] - 1] });
      setForm(defaultForm);
    },
    onError: () => {
      alert('내역 저장 실패');
    },
  });

  const createLedger = () => {
    mutate(form);
  };

  return {
    createLedger,
  };
};

export const useLedgerUpdate = (ledgerID: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [form, setForm] = useRecoilState(ledgerForm);
  const { ledgerInfo } = useLedgerInfo(ledgerID);

  useEffect(() => {
    setForm({
      title: ledgerInfo.title,
      typeID: ledgerInfo.archiveType.archiveTypeID,
      amount: ledgerInfo.amount,
      date: ledgerInfo.date,
      tagList: ledgerInfo.tagList.map((tag) => tag.tagID),
      isExcluded: ledgerInfo.isExcluded,
    });
  }, []);

  const { mutate } = useMutation({
    mutationFn: (data: LedgerCreateParams) => putLedger(data, ledgerID),
    onSuccess: () => {
      alert('내역 수정 완료');
      const date = form.date.split('-').map(Number);
      queryClient.invalidateQueries({ queryKey: ['ledgers', date[0], date[1] - 1] });
      queryClient.invalidateQueries({ queryKey: ['ledger', ledgerID] });
      setForm(defaultForm);
      router.back();
    },
    onError: () => {
      alert('내역 수정 실패');
    },
  });

  const updateLedger = () => {
    mutate(form);
  };

  return {
    updateLedger,
  };
};

export const useLedgerList = () => {
  const selectedMonthYear = useRecoilValue(monthYearFilter);
  const { data: ledgersData } = useSuspenseQuery({
    queryKey: [
      'ledgers',
      selectedMonthYear.targetMonthYear.getFullYear(),
      selectedMonthYear.targetMonthYear.getMonth(),
    ],
    queryFn: () => getLedgersByMonth(selectedMonthYear.targetMonthYear),
    staleTime: 6000 * 100,
  });

  return { ledgersData };
};

export const useLedgerDelete = () => {
  const [deleteLedgerID, setDeleteLedgerID] = useState(0);
  const [date, setDate] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (param: number) => deleteLedger(param),
    onSuccess: () => {
      const yearMonth = date.split('-').map(Number);
      queryClient.invalidateQueries({ queryKey: ['ledgers', yearMonth[0], yearMonth[1] - 1] });
      queryClient.invalidateQueries({ queryKey: ['ledger', deleteLedgerID] });

      closeModal();
    },
    onError: () => {},
  });

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDeleteClicked = (ledgerID: number, dateString: string) => {
    setDeleteLedgerID(ledgerID);
    setDate(dateString);
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

export const useLedgerIDList = (ledgerIDList: number[]) => {
  const result = useSuspenseQueries({
    queries: ledgerIDList.map((ledgerID) => {
      return {
        queryKey: ['ledger', ledgerID],
        queryFn: () => getLedgerByID(ledgerID),
        staleTime: Infinity,
      };
    }),
  });

  return { result };
};

export const useLedgerInfo = (ledgerID: number) => {
  const { data: ledgerInfo } = useSuspenseQuery({
    queryKey: ['ledger', ledgerID],
    queryFn: () => getLedgerByID(ledgerID),
  });

  return { ledgerInfo };
};
