import { ProductItem, Toping } from '@prisma/client';
import { PizzaSize, PizzaType } from '../constants/pizza';

/**
 * Функция для подсчета общей стоимости пиццы
 *
 * @param type - тип теста выбранной пиццы
 * @param size - размер выбранной пиццы
 * @param items - список вариаций
 * @param topings - список ингредиентов
 * @param selectedToping - выбранные ингредиенты
 *
 * @returns number общую стоимость
 */
export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  topings: Toping[],
  selectedToping: Set<number>,
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)?.price || 0;

  const totalTopingsPrice = topings
    .filter((toping) => selectedToping.has(toping.id))
    .reduce((acc, toping) => acc + toping.price, 0);

  return pizzaPrice + totalTopingsPrice;
};

