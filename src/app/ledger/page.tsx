import { Layout } from '@/components/common';
import { PostLedger } from '@/components/ledgers';
import React from 'react';

// interface ILedgerProps {}
function LedgerPage() {
  return (
    <Layout>
      <PostLedger />
    </Layout>
  );
}

export default LedgerPage;
