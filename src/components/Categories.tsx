'use client';

import Image from 'next/image';

import { ICategory } from '@/entities/Category';
import cn from '@/utils/cn';

type ChangedCategory = Pick<ICategory, 'name' | 'id'> & {
  image: string;
};

interface ICategoriesProps {
  categories: ChangedCategory[];
  categorySelected: string;
  onChangeCategory: (categoryName: string) => void;
}

export default function Categories({
  categories,
  categorySelected,
  onChangeCategory,
}: ICategoriesProps) {
  function handleFilterCategory(categoryName: string) {
    onChangeCategory(categoryName);
  }

  return (
    <div className="flex gap-3 mx-auto mt-5 items-center justify-around">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={cn(
            'pb-2',
            category.name === categorySelected && 'border-b-2 border-brown',
          )}
          onClick={() => handleFilterCategory(category.name)}
        >
          <Image
            className={cn(
              'rounded-full h-[74px] w-[74px] object-cover',
              category.name === categorySelected && 'p-0.5 border border-brown',
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
