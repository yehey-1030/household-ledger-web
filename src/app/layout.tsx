import type { Viewport, Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/utils/StyledSheetManager';
import ReactQueryProvider from '@/lib/utils/ReactQueryProvider';
import { CustomIconDescriptorType } from '@/types/custom';
import RecoilProvider from '@/lib/utils/RecoilProvider';

interface IRootLayoutProps {
  children: React.ReactNode;
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1,
  userScalable: false,
};

const icon: CustomIconDescriptorType = {
  rel: 'stylesheet',
  url: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
  precedence: 'default',
};

export const metadata: Metadata = {
  title: '언니의 가계부',
  icons: {
    other: icon,
  },
};

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="kr">
      <body>
        <RecoilProvider>
          <StyledComponentsRegistry>
            <ReactQueryProvider>
              <div id="portal" />
              {children}
            </ReactQueryProvider>
          </StyledComponentsRegistry>
        </RecoilProvider>
      </body>
    </html>
  );
}
