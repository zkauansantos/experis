'use client';

import { useState } from 'react';

import ProductCard from '../ProductCard';

import { AccordionItem } from './AccordionItem';

export function Accordion({ foodMenu }: any) {
  const [indexesOpens, setIndexesOpens] = useState([0, 1, 2]);

  const handleClick = (index: number) => {
    if (indexesOpens.includes(index)) {
      setIndexesOpens((prev) => prev.filter((item) => item !== index));
      return;
    }

    setIndexesOpens((prev) => [...prev, index]);
  };

  return (
    <div className="w-full flex flex-col gap-8 mt-10">
      {foodMenu.sections.map((item: any, index: number) => (
        <AccordionItem
          key={item.id}
          open={indexesOpens.includes(index)}
          title={item.name}
          onClick={() => handleClick(index)}
        >
          {item.items.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AccordionItem>
      ))}
    </div>
  );
}
