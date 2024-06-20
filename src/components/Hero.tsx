'use client';

import { IFoodMenu } from '@/entities/FoodMenu';
import useFilterFoodMenu from '@/hooks/useFilterFoodMenu';
import filterCategories from '@/utils/filterCategories';

import { Accordion } from './Accordion';
import Cart from './Cart';
import Categories from './Categories';
import Input from './Input';

interface IHeroProps {
  data: IFoodMenu;
}

export default function Hero({ data }: IHeroProps) {
  const { category, search, filteredData, handleFilterCategory, handleSearch } =
    useFilterFoodMenu(data);

  return (
    <main className="p-4">
      <Input name="search" value={search} onChange={handleSearch} />

      <section className="md:bg-gray-100 mt-[6px] mx-auto max-w-5xl flex items-start pb-[124px] md:py-8 md:px-10 gap-6">
        <div className="md:flex-[0.6] flex-1 md:bg-white md:px-4 md:py-5 md:shadow-md md:justify-between ">
          <Categories
            categorySelected={category}
            onChangeCategory={handleFilterCategory}
            categories={filterCategories(data)}
          />

          <Accordion sections={filteredData} />
        </div>

        <div className="hidden md:block flex-[0.4]">
          <Cart />
        </div>
      </section>
    </main>
  );
}
