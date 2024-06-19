import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ReactNode } from 'react';

import Providers from '@/layouts/Providers';
import './globals.css';

const inter = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Experis Test - Next.js',
  description: 'Test Front-End.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
