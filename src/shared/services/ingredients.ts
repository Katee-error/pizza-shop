import { axiosInstance } from "./axios";
import { ApiRoutes } from "./constans";
import { Ingredient} from "@prisma/client";

export const getAll = async (query?: string): Promise<Ingredient[]> => {
  try {
    const response = await axiosInstance.get<Ingredient[]>(
      ApiRoutes.INGREDIENTS,
      {
        params: query ? { query } : undefined,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    return [];
  }
};