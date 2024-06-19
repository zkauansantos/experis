import { IProduct } from './Product';

export interface ICategory {
  id: number;
  name: string;
  description: string;
  position: number;
  visible?: number;
  images: {
    id: string;
    image: string;
  }[];
  items: IProduct[];
}
