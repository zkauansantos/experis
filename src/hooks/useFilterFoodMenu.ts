import { ChangeEvent, useMemo, useState } from 'react';

import { ICategory } from '@/entities/Category';
import { IFoodMenu } from '@/entities/FoodMenu';

export default function useFilterFoodMenu(data: IFoodMenu) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleFilterCategory(categoryName: string) {
    setCategory((prev) => {
      if (prev === categoryName) {
        return '';
      }

      return categoryName;
    });
  }

  const filteredData: ICategory[] = useMemo(() => {
    function filterItems(items: ICategory['items']) {
      return items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    return data.sections
      .filter((section) => {
        if (category && section.name !== category) {
          return false;
        }

        return filterItems(section.items);
      })
      .map((section) => ({ ...section, items: filterItems(section.items) }));
  }, [data, search, category]);

  return {
    handleFilterCategory,
    handleSearch,
    filteredData,
    category,
    search,
  };
}
