'use client';

import { X } from 'lucide-react';
import toast from 'react-hot-toast';

import useIsMounted from '@/hooks/useIsMounted';
import { useGlobalStore } from '@/state/store/globalStore';

import Cart from './Cart';
import Checkout from './Checkout';

interface IModalCartMobileProps {
  onClose: () => void;
}

export default function ModalCartMobile({ onClose }: IModalCartMobileProps) {
  const isMounted = useIsMounted();
  const clearCart = useGlobalStore((state) => state.clearCart);

  function handleCheckout() {
    clearCart();
    toast.success('Compra realizada com sucesso!');
  }

  if (!isMounted) return null;

  return (
    <div className="fixed top-0 left-0 flex flex-col justify-between bg-white h-screen w-screen z-[99] animate-fadeIn">
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

      <Checkout onCheckout={handleCheckout} />
    </div>
  );
}
