import React from "react";
import { FilterChecboxProps } from "./filter-checkbox";
import { Input } from "@/components/ui";

type Item = FilterChecboxProps;
interface Props {
  className?: string;
  title: string;
  items: Item[];
  defaultItems?: Item[];
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
  return (
    <div className={className}>
      <div className="mb-5">
        <Input
          // onChange={onChangeSearchInput}
          placeholder={searchInputPlaceholder}
          className="bg-gray-50 border-none"
        />
      </div>
    </div>
  );
};
