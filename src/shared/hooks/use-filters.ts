"use client";
import { useSet } from "react-use";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}
export interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  topings: string;
}

export interface Filter {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  prices: PriceProps;
  selectedTopings: Set<string>;
}

interface ReturnProps extends Filter {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setSizes: (key: string) => void;
  setPizzaTypes: (key: string) => void;
  setSelectedTopings: (key: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  const [selectedTopings, { toggle: toggleTopings }] = useSet(
    new Set<string>(searchParams.get("topings")?.split(","))
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

  return useMemo(
    () => ({
      sizes,
      pizzaTypes,
      selectedTopings,
      prices,
      setPrices: updatePrices,
      setPizzaTypes: togglePizzaTypes,
      setSizes: toggleSizes,
      setSelectedTopings: toggleTopings,
    }),
    [sizes, pizzaTypes, selectedTopings, prices],
  );
};
