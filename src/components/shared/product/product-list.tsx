import React from "react";
import { Title } from "../title";
import { ProductCard } from "./product-card";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  products: any[];
  categoryId: number;
  listClassName?: string;
  className?: string;
}

export const ProductList: React.FC<Props> = ({
  className,
  title,
  products,
  categoryId,
  listClassName,
}) => {
  return (
    <div className={className} id={title}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
