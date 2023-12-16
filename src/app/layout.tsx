import type { Viewport, Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/utils/StyledSheetManager';
import ReactQueryProvider from '@/lib/utils/ReactQueryProvider';

interface IRootLayoutProps {
  children: React.ReactNode;
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1,
  userScalable: false,
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
      <body>
        <div id="portal" />
        <StyledComponentsRegistry>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
