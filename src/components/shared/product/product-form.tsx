"use client";

import { useCartStore } from "@/shared/store/cart";
import React from "react";
import toast from "react-hot-toast";
import { ProductWithRelations } from "../../../../@types/product";
import { ChoosePizzaForm, ChooseProductForm } from "../modals";

interface Props {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({
  product,
  onSubmit: _onSubmit,
}) => {
  const addCartItem = useCartStore((state) => state.addCartItem);
  const loading = useCartStore((state) => state.loading);
  const firstItem = product.variants[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);

  const onSubmit = async (productItemId?: number, topings?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({
        productItemId: itemId,
        topings: topings ?? [],
      });

      toast.success(product.name + "add to cart");

      _onSubmit?.();
    } catch (err) {
      toast.error("Failed to add item to cart");
      console.error(err);
    }
  };


  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        topings={product.topings}
        ingredients={product.ingredients ?? []}
        items={product.variants}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  } else {
    return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      onSubmit={onSubmit}
      price={firstItem.price}
      loading={loading}
      description={product.description ?? undefined}
    />
  );
  }

};
