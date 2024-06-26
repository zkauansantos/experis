'use client';

import toast from 'react-hot-toast';

import useIsMounted from '@/hooks/useIsMounted';
import { useGlobalStore } from '@/state/store/globalStore';
import formatCurrency from '@/utils/formatCurrency';

import Checkout from './Checkout';
import CounterInput from './CounterInput';

export default function Cart() {
  const isMounted = useIsMounted();
  const cartItems = useGlobalStore((state) => state.cartItems);
  const addToCart = useGlobalStore((state) => state.addToCart);
  const removeFromCart = useGlobalStore((state) => state.removeFromCart);
  const getTotal = useGlobalStore((state) => state.getTotal);
  const clearCart = useGlobalStore((state) => state.clearCart);

  const hasCartItems = cartItems.length > 0;

  function handleCheckout() {
    toast.success('Compra realizada com sucesso!');
    clearCart();
  }

  if (!isMounted) return null;

  return (
    <aside className="flex-1 bg-white md:shadow-md">
      <header className="bg-gray-50 px-6 py-[22px] hidden md:block">
        <strong>Carrinho</strong>
      </header>

      <div className="p-6 shadow-inner">
        {!hasCartItems && <p>Seu carrinho está vazio</p>}

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

      {hasCartItems && (
        <>
          <footer className="bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-light">Total:</span>

              <strong className="text-2xl font-bold">
                {formatCurrency(getTotal(cartItems))}
              </strong>
            </div>
          </footer>

          <Checkout onCheckout={handleCheckout} />
        </>
      )}
    </aside>
  );
}
