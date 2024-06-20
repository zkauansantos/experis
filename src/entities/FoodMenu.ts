import { ICategory } from './Category';

export interface IFoodMenu {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: ICategory[];
}
