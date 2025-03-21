import { PizzaSize, PizzaType, mapPizzaType } from '../constants/pizza';
import { CartStateItem } from '../store/cart';

export const getCartItemDetails = (
  topings: CartStateItem['topings'],
  pizzaType?: PizzaType,
  pizzaSize?: PizzaSize,
): string => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (topings) {
    details.push(...topings.map((toping) => toping.name));
  }

  return details.join(', ');
};