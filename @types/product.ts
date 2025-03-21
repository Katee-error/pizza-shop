import { Ingredient, Product, ProductItem, Toping } from "@prisma/client";

export type ProductWithRelations = Product & {
  variants: ProductItem[];
  topings: Toping[];
  ingredients?: Ingredient[];
};
