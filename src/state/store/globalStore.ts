'use client';

import { IProduct } from '@/entities/Product';
import calculateProdductPriceWithModifiers from '@/utils/calculateProductPriceWithModifiers';
import { calculateTotalPrice } from '@/utils/calculateTotalPrice';
import { safeCookiesStorageGetItem } from '@/utils/safeCookiesStorageGetItem';

import { createStore } from './createStore';

interface IGlobalStore {
  cartItems: IProduct[];
  addToCart(product: IProduct, quantity?: number): void;
  removeFromCart(product: IProduct): void;
  getTotal: (cartItems: IProduct[]) => number;
  clearCart: () => void;
}

export const useGlobalStore = createStore<IGlobalStore>((setState) => ({
  cartItems:
    safeCookiesStorageGetItem<IGlobalStore>('global-state')?.cartItems || [],
  addToCart: (product, quantity) => {
    setState((prevState) => {
      const itemIndex = prevState.cartItems.findIndex(
        (cartItem) => cartItem.id === product.id,
      );

      if (itemIndex < 0 && quantity) {
        return {
          cartItems: [
            ...prevState.cartItems,
            {
              ...product,
              quantity,
              price: calculateProdductPriceWithModifiers(product),
            },
          ],
        };
      }

      if (itemIndex < 0) {
        return {
          cartItems: [...prevState.cartItems, { ...product, quantity: 1 }],
        };
      }

      const ItemWasAlreadyInCart = [...prevState.cartItems];
      const indexItemAlready = ItemWasAlreadyInCart[itemIndex];

      ItemWasAlreadyInCart[itemIndex] = {
        ...indexItemAlready,
        quantity: quantity
          ? Number(indexItemAlready.quantity) + quantity
          : Number(indexItemAlready.quantity) + 1,
      };

      return {
        cartItems: ItemWasAlreadyInCart,
      };
    });
  },
  removeFromCart: (product) => {
    setState((prevState) => {
      const itemIndex = prevState.cartItems.findIndex(
        (cartItem) => cartItem.id === product.id,
      );

      if (itemIndex < 0) {
        return prevState;
      }

      const ItemWasAlreadyInCart = [...prevState.cartItems];
      const indexItemAlready = ItemWasAlreadyInCart[itemIndex];

      if (indexItemAlready.quantity === 1) {
        ItemWasAlreadyInCart.splice(itemIndex, 1);
        return {
          cartItems: ItemWasAlreadyInCart,
        };
      }

      ItemWasAlreadyInCart[itemIndex] = {
        ...indexItemAlready,
        quantity: Number(indexItemAlready.quantity) - 1,
      };

      return {
        cartItems: ItemWasAlreadyInCart,
      };
    });
  },
  getTotal: (cartItems: IProduct[]) => {
    const total = calculateTotalPrice(cartItems);

    return total;
  },
  clearCart: () => {
    setState({
      cartItems: [],
    });
  },
}));
