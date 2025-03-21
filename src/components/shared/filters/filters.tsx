"use client";
import { Title } from "../../ui/title";
import { FilterCheckboxGroup } from "./filter-checkbox-group";
import { Input, RangeSlider } from "@/components/ui";
import { useQueryFilters, useTopings, useFilters } from "@/shared/hooks";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { topings, loading } = useTopings();
  const items = topings.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));
  const filters = useFilters();
  useQueryFilters(filters);

  const updatePrice = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

  return (
    <div className={className}>
      <Title text={"Filters"} size="sm" className="font-bold mb-5" />
      <div className="flex flex-col items-start gap-4">
        <FilterCheckboxGroup
          title="Type dought"
          name="pizza types"
          className="mb-5"
          items={[
            { text: "Thin", value: "1" },
            { text: "Traditional", value: "2" },
          ]}
          onClickCheckbox={filters.setPizzaTypes}
          selectedValues={filters.pizzaTypes}
        />
        <FilterCheckboxGroup
          title="Sizes"
          name="sizes"
          className="mb-5"
          items={[
            { text: "25cm", value: "25" },
            { text: "30cm", value: "30" },
            { text: "35cm", value: "35" },
          ]}
          onClickCheckbox={filters.setSizes}
          selectedValues={filters.sizes}
        />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price to and from:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) =>
              filters.setPrices("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.setPrices("priceTo", Number(e.target.value))
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 1000,
          ]}
          onValueChange={updatePrice}
        />
      </div>
      <FilterCheckboxGroup
        title={"Topings"}
        name="topings"
        className="mt-5"
        items={items}
        limit={6}
        loading={loading}
        selectedValues={filters.selectedTopings}
        defaultItems={items.slice(0, 6)}
        onClickCheckbox={filters.setSelectedTopings}
      />
    </div>
  );
};
