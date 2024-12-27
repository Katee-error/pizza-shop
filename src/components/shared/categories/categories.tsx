import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
}

const categories = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
  "Десерты",
];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl mt-5", className)}
    >
      {categories.map((category, i) => (
        <Link
          href={""}
          key={i}
          className={cn(
            "flex items-center font-semibold h-11 rounded-2xl px-5",
            activeIndex === i &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
        >
          <button>{category}</button>
        </Link>
      ))}
    </div>
  )
};
