import Image from 'next/image';

import cn from '@/utils/cn';

export default function Categories({ categories }: any) {
  return (
    <div className="flex gap-3 mx-auto mt-5 items-center justify-around">
      {categories.map((category: any, index: number) => (
        <button
          key={category.id}
          type="button"
          className={cn('pb-2', index === 0 && 'border-b-2 border-brown')}
        >
          <Image
            className={cn(
              'rounded-full h-[74px] w-[74px] object-cover',
              index === 0 && 'p-0.5 border border-brown',
            )}
            src={category.image}
            alt={category.name}
            width={300}
            height={300}
            quality={100}
            priority
          />

          <span className="block mt-4">{category.name}</span>
        </button>
      ))}
    </div>
  );
}
