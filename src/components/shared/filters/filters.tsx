import React from "react";
import { Title } from "../title";
import { FilterCheckbox } from "./filter-checkbox";
import { FilterPrice } from "./filter-price";
import { FilterCheckboxGroup } from "./filter-checkbox-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text={"Фильтрация"} size="sm" className="font-bold mb-5" />
      <div className="flex flex-col items-start gap-4">
        <FilterCheckbox text={"Можно собирать"} value={"1"} />
        <FilterCheckbox text={"Новинки"} value={"2"} />
      </div>
   <FilterPrice/>
   <FilterCheckboxGroup title={""} items={[]}/>
    </div>
  );
};
