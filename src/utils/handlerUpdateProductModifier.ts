import { IModifier } from '@/entities/Modifier';

import { NOT_FOUND_INDEX } from './notFoundIndex';

type UpdateProductModifierParams = {
  prevState: IModifier[];
  modifierId: number;
  itemId: number;
  modifier: IModifier;
  itemModifierSelected: IModifier['items'][0];
};

export default function handlerUpdateProductModifier({
  prevState,
  modifierId,
  modifier,
  itemId,
  itemModifierSelected,
}: UpdateProductModifierParams) {
  const modifierIndex = prevState.findIndex((mod) => mod.id === modifierId);
  const itemSelectedIndex =
    modifierIndex >= 0
      ? prevState[modifierIndex].items.findIndex((item) => item.id === itemId)
      : -1;

  const updateModifierItems = <T>(items: T) =>
    prevState.map((mod) => (mod.id === modifierId ? { ...mod, items } : mod));

  const newItem = [
    ...prevState,
    { ...modifier, items: [itemModifierSelected] },
  ];

  if (modifier.maxChoices === 1) {
    if (NOT_FOUND_INDEX(modifierIndex)) {
      return newItem;
    }
    if (NOT_FOUND_INDEX(itemSelectedIndex)) {
      return updateModifierItems([itemModifierSelected]);
    }
  }

  if (modifier.maxChoices > 1) {
    if (NOT_FOUND_INDEX(modifierIndex)) {
      return newItem;
    }
    if (NOT_FOUND_INDEX(itemSelectedIndex)) {
      return updateModifierItems([
        ...prevState[modifierIndex].items,
        itemModifierSelected,
      ]);
    }
    if (itemSelectedIndex >= 0) {
      return updateModifierItems(
        prevState[modifierIndex].items.filter((item) => item.id !== itemId),
      );
    }
  }

  return prevState;
}
