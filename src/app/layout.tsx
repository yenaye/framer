import type { PropsWithChildren } from 'react';

import type { Metadata } from 'next';

import './globals.css';
import { openSans } from '@/utils/fonts';

export const metadata: Metadata = {
  title: 'Framer',
  description: 'Framer',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={`${openSans.variable} font-openSans`}>{children}</body>
    </html>
  );
};

export default RootLayout;
