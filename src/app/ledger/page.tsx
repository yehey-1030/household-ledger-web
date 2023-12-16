'use client';

import { Header } from '@/components/common';
import { PostLedger } from '@/components/ledgers';
import React from 'react';
import styled from 'styled-components';

// interface ILedgerProps {}
function LedgerPage() {
  return (
    <Wrapper>
      <Header title="내역" />
      <PostLedger />
    </Wrapper>
  );
}

export default LedgerPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;
