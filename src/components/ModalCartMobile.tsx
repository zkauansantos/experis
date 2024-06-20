'use client';

import { X } from 'lucide-react';

import useIsMounted from '@/hooks/useIsMounted';

import Button from './Button';
import Cart from './Cart';

interface IModalCartMobileProps {
  onClose: () => void;
}

export default function ModalCartMobile({ onClose }: IModalCartMobileProps) {
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <div className="fixed top-0 left-0 flex flex-col justify-between bg-white h-screen w-screen z-[99]">
      <div>
        <header className="p-4 relative flex items-center justify-center border-b border-gray-200">
          <h2 className="text-lg font-semibold">Basket</h2>

          <button
            className="absolute right-4 top-4"
            type="button"
            onClick={onClose}
          >
            <X />
          </button>
        </header>

        <div className="flex-[0.4]">
          <Cart />
        </div>
      </div>

      <footer className="p-6">
        <Button className="w-full h-12 max-w-[345px] mx-auto rounded-3xl">
          Checkout now
        </Button>
      </footer>
    </div>
  );
}
