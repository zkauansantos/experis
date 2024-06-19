import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export default function CounterInput() {
  const [quantity, setQuantity] = useState(0);

  function handleIncrement() {
    setQuantity((prev) => prev + 1);
  }

  function handleDecrement() {
    setQuantity((prev) => {
      if (prev === 0) return prev;

      return prev - 1;
    });
  }

  return (
    <div className="flex gap-4 items-center justify-center">
      <button
        type="button"
        className="px-2 py-1 rounded-full flex items-center justify-center h-[32px] w-[32px] bg-gray-200 text-gray-600"
        onClick={handleDecrement}
      >
        <Minus />
      </button>
      <span className="text-2xl font-semibold">{quantity}</span>
      <button
        type="button"
        className="px-2 py-1 rounded-full flex items-center justify-center h-[32px] w-[32px] bg-brown"
        onClick={handleIncrement}
      >
        <Plus className="text-white" />
      </button>
    </div>
  );
}
