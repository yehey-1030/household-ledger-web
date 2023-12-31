import React, { Suspense } from 'react';

import { Layout, Loading } from '@/components/common';
import { Statistic } from '@/components/statistics';

function StatisticPage() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Statistic />
      </Suspense>
    </Layout>
  );
}

export default StatisticPage;
