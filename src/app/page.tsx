'use client';

import { Header } from '@/components/common';

import PostLedger from '@/components/ledgers/PostLedger';
import React from 'react';
import styled from 'styled-components';

export default function Home() {
  return (
    <Wrapper>
      <Header title="HOME" />
      <PostLedger />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
