"use client";
import React, { useEffect } from "react";
import { Title } from "../../ui/title";
import { ProductCard } from "./product-card";
import { cn } from "@/shared/lib/utils";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/shared/store/category";

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
  const setActiveCategoryId = useCategoryStore((state) => state.setCategoryId);
  const intersectionRef = React.useRef<HTMLDivElement>(null);
  const intersection = useIntersection(
    intersectionRef as React.RefObject<HTMLElement>,
    {
      threshold: 0.4,
    }
  );

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title, setActiveCategoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.variants[0].price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
