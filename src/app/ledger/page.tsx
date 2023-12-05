'use client';

import PostLedger from '@/components/ledgers/PostLedger';
import React from 'react';
import styled from 'styled-components';

interface ILedgerProps {}
function LedgerPage({}: ILedgerProps) {
  return (
    <Wrapper>
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
`;
