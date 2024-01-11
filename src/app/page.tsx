import { Layout, Loading } from '@/components/common';
import HomeHeader from '@/components/common/header/HomeHeader';
import { LedgerList } from '@/components/home';

import React, { Suspense } from 'react';

export default function Home() {
  return (
    <Layout>
      <HomeHeader />

      <Layout>
        <Suspense fallback={<Loading />}>
          <LedgerList />
        </Suspense>
      </Layout>
    </Layout>
  );
}
