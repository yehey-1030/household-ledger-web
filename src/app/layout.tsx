// import { ThemeProvider } from 'styled-components';
// import { theme, GlobalStyle } from '@/styles';
import type { Viewport } from 'next';
import StyledComponentsRegistry from '@/lib/utils/styledRegistry';

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

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="kr">
      <body>
        <div id="portal" />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
