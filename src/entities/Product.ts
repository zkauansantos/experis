import { IModifier } from './Modifier';

export interface IProduct {
  id: number;
  name: string;
  description?: string;
  alcoholic: number;
  price: number;
  position: number;
  visible?: number;
  availabilityType: string;
  sku?: string;
  images?: {
    id: string;
    image: string;
  }[];
  available: boolean;
  modifiers?: IModifier[];
  quantity?: number;
}
