'use client';

import React from 'react';
import styled from 'styled-components';

interface ILedgerLayoutProps {
  children: React.ReactNode;
}
export default function LedgerLayout({ children }: ILedgerLayoutProps) {
  return <Layout>{children}</Layout>;
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  margin: 0 auto;
`;
