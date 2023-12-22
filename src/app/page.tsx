import { Layout, Loading } from '@/components/common';
import { LedgerList } from '@/components/home';

import React, { Suspense } from 'react';

export default function Home() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <LedgerList />
      </Suspense>
    </Layout>
  );
}
