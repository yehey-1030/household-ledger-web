'use client';

/* eslint-disable react/jsx-no-useless-fragment */

import React, { useEffect, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import styled, { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/styles';
// import { Header } from '@/components/common';

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
  const [isClient, setIsClient] = useState(false);

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  // if (typeof window !== 'undefined') return <>{children}</>;
  if (isClient) return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <Header title="Home" /> */}
        <Applayout>{children}</Applayout>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

const Applayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;
