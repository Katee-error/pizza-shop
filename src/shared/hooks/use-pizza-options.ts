import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import React, { useState } from 'react';
import { useSet } from 'react-use';
import { ProductItem } from '@prisma/client';
import { Variant } from '@/components/shared/product/product-details-variant';
import { getAvailablePizzaSizes } from '../lib/get-avaliable-pizza';

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  selectedToping: Set<number>;
  availableSizes: Variant[];
  currentItemId?: number;
  setSize: (size: PizzaSize) => void;
  setType: (size: PizzaType) => void;
  addToping: (id: number) => void;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = useState<PizzaSize>(30);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedToping, { toggle: addToping }] = useSet(new Set<number>([]));

  const availableSizes = getAvailablePizzaSizes(type, items);

  const currentItemId = items.find((item) => item.pizzaType === type && item.size === size)?.id;

  React.useEffect(() => {
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled,
    );
    const availableSize = availableSizes?.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);
  
  return {
    size,
    type,
    selectedToping,
    availableSizes,
    currentItemId,
    setSize,
    setType,
    addToping,
  };
};
