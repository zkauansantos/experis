import { X } from 'lucide-react';
import Image from 'next/image';

import formatCurrency from '@/utils/formatCurrency';

import CounterInput from './CounterInput';

export default function ProductDetailModal({ product, onClose }: any) {
  return (
    <div className="bg-white md:bg-black/60 fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="w-full h-full md:max-w-[480px] md:max-h-[720px] md:min-h-[720px] flex  justify-center flex-col">
        <div className="relative">
          <button
            type="button"
            onClick={onClose}
            className="h-7 w-7 absolute top-4 right-4 bg-white rounded-full flex items-center justify-center"
          >
            <X size={12} />
          </button>
          <Image
            src={product.images?.[0]?.image}
            width={300}
            height={300}
            alt="Imagem do produto"
            className="w-full max-h-[265px] md:max-h-[320px]"
          />
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

          {product.modifiers &&
            product.modifiers.map((modifier: any) => (
              <div
                className="md:max-h-[280px] md:overflow-y-auto scrollbar-thin scrollbar-webkit pb-24"
                key={modifier.id}
              >
                <div className="bg-gray-50 p-4 shadow-inner">
                  <strong className="text-gray-600 font-bold">
                    {modifier.name}
                  </strong>

                  <span className="block text-gray-500">Select 1 Option</span>
                </div>

                <div className="p-4 flex flex-col gap-4">
                  {modifier.items.map((item: any) => (
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

                      <input type="radio" name="modifier" />
                    </div>
                  ))}
                </div>
              </div>
            ))}

          <div className="backdrop-blur-sm  absolute w-full bottom-3 px-6 gap-[10px] flex flex-col items-center justify-center ">
            <CounterInput />

            <button
              type="button"
              className="w-full h-[48px] flex items-center justify-center bg-brown text-white p-4 font-medium text-lg rounded-[40px]"
            >
              Add to Order • R$11.75
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
