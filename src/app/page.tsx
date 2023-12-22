import { Layout, Loading, Header } from '@/components/common';
import { LedgerList } from '@/components/home';

import React, { Suspense } from 'react';

export default function Home() {
  return (
    <Layout>
      <Header title="HOME" goback={false} canCreate />

      <Layout>
        <Suspense fallback={<Loading />}>
          <LedgerList />
        </Suspense>
      </Layout>
    </Layout>
  );
}
