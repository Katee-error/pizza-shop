"use client";
import { Api } from "@/shared/services/api-client";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";

type IngredientItem = Pick<Ingredient, "id" | "name">;
export const useIngredients = () => {
  const [ingredients, setIngredients] = useState<IngredientItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        setLoading(true);
        const ingredientsResponse = await Api.ingredients.getAll();
        const ingredients = ingredientsResponse.ingredients;

        if (!Array.isArray(ingredients)) {
          console.error("Expected an array but got:", ingredients);
          return;
        }
        setIngredients(ingredients.map(({ id, name }) => ({ id, name })));
      } catch (error) {
        console.error("Error fetching ingredients:", error);
        setIngredients([]);
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, []);

  return { ingredients, loading };
};
