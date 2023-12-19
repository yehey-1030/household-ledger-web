import { Layout } from '@/components/common';
import React from 'react';

interface ILedgerLayoutProps {
  children: React.ReactNode;
}
export default function LedgerLayout({ children }: ILedgerLayoutProps) {
  return <Layout>{children}</Layout>;
}
