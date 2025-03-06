"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useCategoryStore } from "@/store/category";

interface Props {
  className?: string;
}

const categories = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Коктейли" },
  { id: 5, name: "Кофе" },
  { id: 6, name: "Напитки" },
  { id: 7, name: "Десерты" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryId = useCategoryStore((state) => state.categoryId);

  return (
    <div
      className={cn(
        "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl mt-5",
        className
      )}
    >
      {categories.map(({ id, name }, index) => (
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
