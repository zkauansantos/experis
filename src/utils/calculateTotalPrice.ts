import { IProduct } from '@/entities/Product';

export function calculateTotalPrice(products: IProduct[]) {
  return products.reduce(
    (acc, product) => acc + product.price * Number(product.quantity),
    0,
  );
}
