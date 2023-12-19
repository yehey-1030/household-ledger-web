import { Header, Layout } from '@/components/common';
import React from 'react';

interface ILedgerLayoutProps {
  children: React.ReactNode;
}
export default function LedgerLayout({ children }: ILedgerLayoutProps) {
  return (
    <Layout>
      <Header title="내역" />
      {children}
    </Layout>
  );
}
