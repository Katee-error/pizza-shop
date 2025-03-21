'use client'
import qs from "qs";
import { useEffect, useState } from "react";
import { Filter } from "./use-filters";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filter) => {
  const router = useRouter();
  const [prevQuery, setPrevQuery] = useState("");

  useEffect(() => {
    const params = {
      ...filters.prices,
      sizes: Array.from(filters.sizes),
      pizzaTypes: Array.from(filters.pizzaTypes),
      topings: Array.from(filters.selectedTopings),
    };

    const query = qs.stringify(params, {
      arrayFormat: "comma",
    });

    if (query !== prevQuery) { 
      router.push(`?${query}`, { scroll: false });
      setPrevQuery(query);
    }
  }, [filters, router, prevQuery]);
};
