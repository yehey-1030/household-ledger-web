import React, { Suspense } from 'react';

import { Layout, Loading } from '@/components/common';
import { Statistic } from '@/components/statistics';

async function StatisticPage() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Statistic />
      </Suspense>
    </Layout>
  );
}

export default StatisticPage;
