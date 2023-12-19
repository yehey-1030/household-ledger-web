import { Header, Layout } from '@/components/common';
import { PostLedger } from '@/components/ledgers';
import React from 'react';

// interface ILedgerProps {}
function LedgerPage() {
  return (
    <Layout>
      <Header title="내역" />
      <PostLedger />
    </Layout>
  );
}

export default LedgerPage;
