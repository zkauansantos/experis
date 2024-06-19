import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClick: () => void;
};

export function AccordionItem({
  title,
  children,
  onClick,
  open = false,
}: Props) {
  return (
    <article className="w-full select-none">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between"
      >
        <h4 className="font-medium text-2xl ">{title}</h4>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>
      {open && <div className="mt-6 flex flex-col gap-6">{children}</div>}
    </article>
  );
}
