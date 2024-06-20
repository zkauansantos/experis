import { IFoodMenu } from '@/entities/FoodMenu';

export default function filterCategories(data: IFoodMenu) {
  return data.sections.map((section) => ({
    id: section.id,
    name: section.name,
    image: section.images[0].image,
  }));
}
