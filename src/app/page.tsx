'use client';

import { Header } from '@/components/common';
import LedgerList from '@/components/home/LedgerList';

import React, { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Header title="HOME" goback={false} canCreate />
      <Suspense fallback={<div>Loading...</div>}>
        <LedgerList />
      </Suspense>
    </>
  );
}
