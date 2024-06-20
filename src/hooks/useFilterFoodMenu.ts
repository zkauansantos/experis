import { ChangeEvent, useMemo, useState } from 'react';

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

  const filteredData = useMemo(
    () =>
      data.sections
        .map((section) => {
          if (category && section.name !== category) {
            return null;
          }

          const filteredItems = section.items.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase()),
          );

          return filteredItems.length > 0
            ? { ...section, items: filteredItems }
            : null;
        })
        .filter((section) => section !== null),
    [data, search, category],
  );

  return {
    handleFilterCategory,
    handleSearch,
    filteredData,
    category,
    search,
  };
}
