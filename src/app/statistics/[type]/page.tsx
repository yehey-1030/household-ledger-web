import React, { Suspense } from 'react';

import { Layout, Loading } from '@/components/common';
import { Statistic } from '@/components/statistics';

function StatisticPage({ params }: { params: { type: number } }) {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Statistic typeID={params.type} />
      </Suspense>
    </Layout>
  );
}

export default StatisticPage;
