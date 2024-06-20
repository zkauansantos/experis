'use client';

import useModal from '@/hooks/useModal';
import { useGlobalStore } from '@/state/store/globalStore';

import Button from './Button';
import ModalCartMobile from './ModalCartMobile';

export default function FooterMobile() {
  const { closeModal, isOpen, openModal } = useModal();
  const qtyCartItems = useGlobalStore((state) => state.cartItems).length;

  const isPlural = qtyCartItems > 1;

  if (qtyCartItems === 0) return null;

  return (
    <>
      <div className="w-full backdrop-blur-sm flex items-center justify-center md:hidden fixed bottom-0 p-6 pt-2">
        <Button
          className="w-full rounded-3xl max-w-[345px] h-[48px] p-4"
          onClick={openModal}
        >
          Your basket • {qtyCartItems} item{isPlural ? 's' : ''}
        </Button>
      </div>

      {isOpen && <ModalCartMobile onClose={closeModal} />}
    </>
  );
}
