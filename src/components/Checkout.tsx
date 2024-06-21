'use client';

import Button from './Button';

interface ICheckoutProps {
  onCheckout: () => void;
}

export default function Checkout({ onCheckout }: ICheckoutProps) {
  return (
    <footer className="p-6">
      <Button
        onClick={onCheckout}
        className="w-full h-12 max-w-[345px] mx-auto rounded-3xl"
      >
        Checkout now
      </Button>
    </footer>
  );
}
