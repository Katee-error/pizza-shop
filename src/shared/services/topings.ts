import { axiosInstance } from "./axios";
import { ApiRoutes } from "./constans";
import { Toping } from "@prisma/client";

export const getAll = async (query?: string): Promise<Toping[]> => {
  try {
    const response = await axiosInstance.get<Toping[]>(
      ApiRoutes.TOPINGS,
      {
        params: query ? { query } : undefined,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching topings:", error);
    return [];
  }
};
