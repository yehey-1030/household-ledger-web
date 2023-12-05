// import { ThemeProvider } from 'styled-components';
// import { theme, GlobalStyle } from '@/styles';
import type { Viewport } from 'next';
import StyledComponentsRegistry from '@/lib/utils/styledRegistry';
import type { Metadata } from 'next';
import Head from 'next/head';

interface IRootLayoutProps {
  children: React.ReactNode;
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export const metadata: Metadata = {
  title: '언니의 가계부',
  icons: {
    other: {
      rel: 'stylesheet',
      url: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
      precedence: 'default',
    },
  },
};

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="kr">
      {/* <Head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </Head> */}
      <body>
        <div id="portal" />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
