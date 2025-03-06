import { axiosInstance } from "./axios";
import { ApiRoutes } from "./constans";
import { Product } from "@prisma/client";

export const search = async (query: string): Promise<Product[]> => {
  try {
    const response = await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};