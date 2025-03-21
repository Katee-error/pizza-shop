"use client";
import { Api } from "@/shared/services/api-client";
import { Toping } from "@prisma/client";
import { useEffect, useState } from "react";

type TopingItem = Pick<Toping, "id" | "name">;
export const useTopings = () => {
  const [topings, setTopings] = useState<TopingItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopings = async () => {
      try {
        setLoading(true);
        const topingsResponse = await Api.topings.getAll();
        const topings = topingsResponse.topings;

        if (!Array.isArray(topings)) {
          console.error("Expected an array but got:", topings);
          return;
        }
        setTopings(topings.map(({ id, name }) => ({ id, name })));
      } catch (error) {
        console.error("Error fetching topings:", error);
        setTopings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTopings();
  }, []);

  return { topings, loading };
};
