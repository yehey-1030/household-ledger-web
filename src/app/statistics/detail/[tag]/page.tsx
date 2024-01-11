import { Layout, Loading } from '@/components/common';
import { DetailLedgerList } from '@/components/statistics';
import { Suspense } from 'react';

function DetailStatisticPage({ params }: { params: { tag: number } }) {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <DetailLedgerList tagID={params.tag} />
      </Suspense>
    </Layout>
  );
}

export default DetailStatisticPage;
