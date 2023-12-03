'use client';

import styled, { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '@/styles';
import Header from '@/components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body>
        <div id="portal" />
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header title="Home" />
          <Applayout>{children}</Applayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
const Applayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 0 1.7rem;
  width: 100%;
  margin: 0 auto;
`;
