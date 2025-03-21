import { Ingredient, ProductItem, Toping } from "@prisma/client";
import { PizzaSize, PizzaType, mapPizzaType } from "../constants/pizza";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  topings: Toping[],
  selectedToping: Set<number>,
  ingredients: Ingredient[]
) => {
  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    topings,
    selectedToping,
  );
  const baseText = `${size} см, ${mapPizzaType[type]} pizza`;

  // const ingredientNames = ingredients.map((i) => i.name).join(", ");
  // const fullText = ingredientNames
  // ? `${baseText}.\nIngredients: ${ingredientNames}.`
  // : `${baseText}.`;


  return { totalPrice, textDetaills: baseText };
};
