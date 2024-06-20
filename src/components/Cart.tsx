'use client';

import { useGlobalStore } from '@/state/store/globalStore';
import formatCurrency from '@/utils/formatCurrency';

import CounterInput from './CounterInput';

export default function Cart() {
  const cartItems = useGlobalStore((state) => state.cartItems);
  const addToCart = useGlobalStore((state) => state.addToCart);
  const removeFromCart = useGlobalStore((state) => state.removeFromCart);
  const getTotal = useGlobalStore((state) => state.getTotal);

  return (
    <aside className="flex-[0.4] bg-white shadow-md hidden md:block">
      <header className="bg-gray-50 px-6 py-[22px]">
        <strong>Carrinho</strong>
      </header>

      <div className="p-6 shadow-inner">
        {cartItems.length === 0 && <p>Seu carrinho está vazio</p>}

        {cartItems.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-start mb-4"
          >
            <div className="flex flex-col items-start justify-start">
              <h3 className="font-semibold">{product.name}</h3>

              {product.modifiers && product.modifiers.length > 0 && (
                <div className="flex items-center gap-2">
                  {product.modifiers
                    .flatMap((modifier) => modifier.items)
                    .map((item) => (
                      <span key={item.id} className="text-gray-500">
                        {item.name}
                      </span>
                    ))}
                </div>
              )}

              <CounterInput
                variant="sm"
                onDecrement={() => removeFromCart(product)}
                onIncrement={() => addToCart(product)}
                value={product.quantity ?? 0}
              />
            </div>

            <span className="font-semibold text-brown">
              {formatCurrency(product.price * Number(product.quantity))}
            </span>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <footer className="bg-gray-50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-light">Total:</span>

            <strong className="text-2xl font-bold">
              {formatCurrency(getTotal(cartItems))}
            </strong>
          </div>
        </footer>
      )}
    </aside>
  );
}
