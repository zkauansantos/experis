import { Menu as Hamburger } from 'lucide-react';

import cn from '@/utils/cn';

export default function Menu() {
  return (
    <>
      {/* // Mobile */}
      <header
        className={cn(
          'block md:hidden w-full',
          'fixed top-0 left-0 z-10',
          'flex items-center justify-center',
          'w-full h-[52px] bg-brown shadow-md',
        )}
      >
        <strong className="text-white font-medium text-lg tracking-[0.75px]">
          Menu
        </strong>

        <button type="button" className="absolute right-4">
          <Hamburger color="white" />
        </button>
      </header>

      {/* // Desktop */}

      <header className="w-full hidden md:block bg-brown h-[52px] shadow-md fixed top-0 left-0 z-10">
        <nav className="h-full max-w-[700px] mx-auto ">
          <ul className="h-full flex items-center justify-center ">
            {['Menu', 'Entrar', 'Contato'].map((it, index) => (
              <li
                key={it}
                className={cn(
                  'text-xl uppercase h-full flex items-center justify-center text-white tracking-[0.5px] flex-1',
                  index === 0 && 'border-b-2',
                  !(index === 0) && 'cursor-not-allowed opacity-50',
                )}
              >
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
