import { Search } from 'lucide-react';
import { ComponentPropsWithRef } from 'react';

interface IInputProps extends ComponentPropsWithRef<'input'> {}

export default function Input({ ...props }: IInputProps) {
  return (
    <div className="border rounded-md h-[40px] overflow-hidden shadow-sm flex items-center p-[10px] gap-[10px] max-w-5xl mx-auto">
      <Search className="text-gray-400 h-5 w-5" />

      <input
        className="outline-none flex-1"
        {...props}
        placeholder="Search menu items"
      />
    </div>
  );
}
