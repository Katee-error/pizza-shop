"use client";
import { useSet } from "react-use";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}
export interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export interface Filter {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  prices: PriceProps;
  selectedIngredients: Set<string>;
}

interface ReturnProps extends Filter {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setSizes: (key: string) => void;
  setPizzaTypes: (key: string) => void;
  setSelectedIngredients: (key: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get("ingredients")?.split(","))
  );

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : []
    )
  );

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.has("pizzaTypes")
        ? searchParams.get("pizzaTypes")?.split(",")
        : []
    )
  );

  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const updatePrices = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    selectedIngredients,
    sizes,
    pizzaTypes,
    prices,
    setPrices: updatePrices,
    setPizzaTypes: togglePizzaTypes,
    setSizes: toggleSizes,
    setSelectedIngredients: toggleIngredients,
  };
};
