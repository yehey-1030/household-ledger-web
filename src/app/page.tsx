import { Header, Layout } from '@/components/common';
import { LedgerList } from '@/components/home';

import React, { Suspense } from 'react';

export default function Home() {
  return (
    <Layout>
      <Header title="HOME" goback={false} canCreate />
      <Suspense fallback={<div>Loading...</div>}>
        <LedgerList />
      </Suspense>
    </Layout>
  );
}
