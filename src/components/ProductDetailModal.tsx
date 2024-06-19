'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { IModifier } from '@/entities/Modifier';
import { IProduct } from '@/entities/Product';
import { useGlobalStore } from '@/state/store/globalStore';
import cn from '@/utils/cn';
import formatCurrency from '@/utils/formatCurrency';

import Button from './Button';
import CounterInput from './CounterInput';

interface IProductDetailModalProps {
  product: IProduct;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  onClose,
}: IProductDetailModalProps) {
  const [quantity, setQuantity] = useState(0);
  const [selectedModifiers, setSelectedModifiers] = useState<IModifier[]>([]);
  const addToCart = useGlobalStore((state) => state.addToCart);

  function handleIncrementQty() {
    setQuantity((prev) => prev + 1);
  }

  function handleDecrementQty() {
    setQuantity((prev) => {
      if (prev === 0) return prev;

      return prev - 1;
    });
  }

  function handleAddToCart(itemProduct: IProduct) {
    addToCart(
      {
        ...itemProduct,
        modifiers: selectedModifiers,
      },
      quantity,
    );
    setQuantity(0);
    toast.success('Produto adicionado ao carrinho com sucesso!');
    onClose();
  }

  function handleSelectModifier({
    modifierId,
    itemId,
  }: {
    modifierId: number;
    itemId: number;
  }) {
    const itemModifierSelected = product.modifiers
      ?.flatMap((modifier) => modifier.items)
      .find((item) => item.id === itemId);

    if (!itemModifierSelected) return;

    // um modifier tem um array de items, e é isso que vamos mandar para o carirnho

    const modifier = product.modifiers?.find((mod) => mod.id === modifierId);

    if (!modifier) return;

    const modifierChanged = {
      ...modifier,
      items: [itemModifierSelected],
    };

    setSelectedModifiers((prevState) => {
      const modifierIndex = prevState.findIndex(
        (mod) => mod.id === modifierChanged.id,
      );

      if (modifierIndex < 0) {
        return [...prevState, modifierChanged];
      }

      return prevState.map((modi) => ({
        ...modi,
        items:
          modi.id === modifierChanged.id ? [itemModifierSelected] : modi.items,
      }));
    });
  }

  const isRequiredOneOrMoreModifier = product.modifiers?.some(
    (modifier) => modifier.minChoices > 0,
  );

  const isDisabledButton =
    quantity === 0 ||
    (isRequiredOneOrMoreModifier && selectedModifiers.length === 0);

  return (
    <div className="bg-white md:bg-black/60 fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="w-full h-full md:max-w-[480px] md:max-h-[720px] md:min-h-[720px] flex  justify-center flex-col relative">
        <div>
          <button
            type="button"
            onClick={onClose}
            className={cn(
              'h-7 w-7 z-[2] absolute top-4 right-4 bg-white rounded-full flex items-center justify-center',
              !product.images && 'bg-gray-300',
            )}
          >
            <X size={12} />
          </button>

          {product.images && (
            <Image
              src={product.images[0]?.image}
              width={300}
              height={300}
              alt="Imagem do produto"
              className="w-full max-h-[265px] md:max-h-[320px]"
            />
          )}
        </div>

        <div className="flex-1 w-full relative bg-white">
          <div className="p-4">
            <h2 className="font-bold text-2xl">{product.name}</h2>

            {product.description && (
              <p className="tracking-[-0.5px] text-gray-500">
                {product.description}
              </p>
            )}
          </div>

          <div className="md:max-h-[280px] md:overflow-y-auto scrollbar-thin scrollbar-webkit pb-24">
            {product.modifiers &&
              product.modifiers.map((modifier) => (
                <div key={modifier.id}>
                  <div className="bg-gray-50 p-4 shadow-inner">
                    <strong className="text-gray-600 font-bold">
                      {modifier.name}
                    </strong>

                    <span className="block text-gray-500">Select 1 Option</span>
                  </div>

                  <div className="p-4 flex flex-col gap-4">
                    {modifier.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex flex-col">
                          <strong className="font-medium">{item.name}</strong>

                          <strong className="text-gray-500 font-medium">
                            {formatCurrency(item.price)}
                          </strong>
                        </div>

                        <input
                          onChange={() =>
                            handleSelectModifier({
                              modifierId: modifier.id,
                              itemId: item.id,
                            })
                          }
                          type="radio"
                          name="modifier"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="backdrop-blur-sm  absolute w-full bottom-3 px-6 gap-[10px] flex flex-col items-center justify-center ">
            <CounterInput
              onDecrement={handleDecrementQty}
              onIncrement={handleIncrementQty}
              value={quantity}
            />

            <Button
              disabled={isDisabledButton}
              onClick={() => handleAddToCart(product)}
              className="w-full h-[48px]  text-white p-4 text-lg rounded-[40px]"
            >
              Add to Order • {formatCurrency(product.price * quantity)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
