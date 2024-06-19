'use client';

import { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

interface IProvidersProps extends PropsWithChildren {}

export default function Providers({ children }: IProvidersProps) {
  return (
    <>
      <Toaster position="bottom-center" />

      {children}
    </>
  );
}
