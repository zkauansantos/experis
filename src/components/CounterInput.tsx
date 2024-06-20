'use client';

import { Minus, Plus } from 'lucide-react';

import cn from '@/utils/cn';

import Button from './Button';

interface ICounterInputProps {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
  variant?: 'lg' | 'sm';
}

export default function CounterInput({
  onDecrement,
  onIncrement,
  value,
  variant = 'lg',
}: ICounterInputProps) {
  return (
    <div className="flex gap-4 items-center justify-center">
      <Button
        className={cn(
          'rounded-full bg-gray-200 text-gray-600 h-[32px] w-[32px]',
          variant === 'sm' && 'h-5 w-5',
        )}
        onClick={onDecrement}
      >
        <Minus />
      </Button>
      <span
        className={cn(
          'text-2xl font-semibold',
          variant === 'sm' && 'text-base',
        )}
      >
        {value}
      </span>
      <Button
        className={cn(
          'rounded-full h-[32px] w-[32px] bg-brown',
          variant === 'sm' && 'h-5 w-5',
        )}
        onClick={onIncrement}
      >
        <Plus className="text-white" />
      </Button>
    </div>
  );
}
