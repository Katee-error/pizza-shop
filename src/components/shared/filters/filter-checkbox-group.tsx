"use client";
import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input } from "@/components/ui";
import { HtmlContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";

type Item = FilterChecboxProps;
interface Props {
  className?: string;
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  defaultValue?: string[];
  loading?: boolean;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
}

export const FilterCheckboxGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 6,
  searchInputPlaceholder = "Поиск...",
  className,
  loading,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const defaultProductList = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems?.slice(0, limit);

  return (
    <div className={className}>
      <p className=" font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={handleSearchInputChange}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {defaultProductList.map((item, i) => (
          <FilterCheckbox
            text={item.text}
            value={item.value}
            key={i}
            endAdornment={item.endAdornment}
            // checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-4"
          >
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
