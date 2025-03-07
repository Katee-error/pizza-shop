"use client";
import React from "react";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { useCategoryStore } from "@/shared/store/category";
import { Category } from "@prisma/client";

interface Props {
  items: Category[];
  className?: string;
}

export const Categories: React.FC<Props> = ({ items, className }) => {
  const categoryId = useCategoryStore((state) => state.categoryId);

  return (
    <div
      className={cn(
        "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl mt-5",
        className
      )}
    >
      {items.map(({ id, name }, index) => (
        <Link
          href={`/#${name}`}
          key={index}
          className={cn(
            "flex items-center font-semibold h-11 rounded-2xl px-5",
            categoryId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
        >
          <button>{name}</button>
        </Link>
      ))}
    </div>
  );
};
