/* eslint-disable react/button-has-type */
import { ComponentProps } from 'react';

import cn from '@/utils/cn';

interface IButtonProps extends ComponentProps<'button'> {}

export default function Button({
  type = 'button',
  className,
  ...props
}: IButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={cn(
        'bg-brown font-medium text-white flex items-center justify-center',
        'disabled:bg-gray-300 disabled:cursor-not-allowed transition-all',
        className,
      )}
    >
      {props.children}
    </button>
  );
}
