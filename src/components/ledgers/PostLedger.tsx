import React from 'react';

import LedgerForm from './LedgerForm';
import { useLedgerCreate } from '@/lib/hooks';

function PostLedger() {
  const { createLedger } = useLedgerCreate();

  return <LedgerForm onSubmit={createLedger} />;
}

export default PostLedger;
