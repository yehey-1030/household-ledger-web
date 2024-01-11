import { Header, Layout } from '@/components/common';
import React from 'react';

interface IStatisticsLayoutProps {
  children: React.ReactNode;
}
export default function StatisticsLayout({ children }: IStatisticsLayoutProps) {
  return (
    <Layout>
      <Header title="통계" hasDrawer />
      {children}
    </Layout>
  );
}
