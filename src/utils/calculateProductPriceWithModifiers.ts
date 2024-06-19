import { IProduct } from '@/entities/Product';

export default function calculateProdductPriceWithModifiers(
  product: IProduct,
): number {
  const productPrice = product.price;

  if (
    !product.modifiers ||
    (product.modifiers && product.modifiers.length < 1)
  ) {
    return productPrice;
  }

  const modifiersPrice = product.modifiers
    .flatMap((modifier) => modifier.items)
    .reduce((acc, item) => acc + item.price, 0);

  return productPrice + modifiersPrice;
}
