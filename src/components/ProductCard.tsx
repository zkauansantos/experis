import Image from 'next/image';
import { KeyboardEvent, useState } from 'react';

import { IProduct } from '@/entities/Product';
import formatCurrency from '@/utils/formatCurrency';
import truncate from '@/utils/truncate';

import ProductDetailModal from './ProductDetailModal';

interface IProductProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProductProps) {
  const [modalProductDetailsOpen, setModalProductDetailsOpen] = useState(false);

  function handleOpenModal() {
    setModalProductDetailsOpen(true);
  }

  function handleCloseModal() {
    setModalProductDetailsOpen(false);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleOpenModal();
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleOpenModal}
      onKeyDown={handleKeyDown}
      className="flex overflow-hidden items-center justify-between gap-4"
    >
      <div className="flex flex-col gap-1">
        <h4 className="font-medium">{product.name}</h4>

        {product.description && (
          <h4 className="font-light text-gray-500">
            {truncate(product.description, 60)}
          </h4>
        )}
        <p className="font-medium">{formatCurrency(product.price)}</p>
      </div>

      {product.images && product.images.length > 0 && (
        <Image
          src={product.images[0].image}
          alt={product.name}
          width={200}
          height={200}
          quality={100}
          priority
          className="max-w-[128px] max-h-[85px] object-contain rounded-md"
        />
      )}

      {modalProductDetailsOpen && (
        <ProductDetailModal product={product} onClose={handleCloseModal} />
      )}
    </div>
  );
}
