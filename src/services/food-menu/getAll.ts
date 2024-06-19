import { IFoodMenu } from '@/entities/FoodMenu';
import { httpClient } from '@/services/httpClient';

export default async function getAll() {
  const { data } = await httpClient.get<IFoodMenu>('/menu');

  return data;
}
