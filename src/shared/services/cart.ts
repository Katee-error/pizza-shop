import { CartDTO, CreateCartItemValues } from "./dto/cart.dto";
import { axiosInstance } from "./axios";

export const getCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>("/cart")).data;
};

export const updateItemQuantity = async (
  itemId: number,
  quantity: number
): Promise<CartDTO> => {
  return (await axiosInstance.patch<CartDTO>("/cart/" + itemId, { quantity }))
    .data;
};

export const removeCartItem = async (id: number): Promise<CartDTO> => {
  return (await axiosInstance.delete<CartDTO>("/cart/" + id)).data;
};

export const addCartItem = async (values: CreateCartItemValues): Promise<CartDTO> => {
  if (!values.productItemId) {
    throw new Error("Некорректные данные для добавления товара");
  }

  try {
    console.log("Отправка запроса:", values);
    const response = await axiosInstance.post<CartDTO>('cart', values);
    console.log("Ответ сервера:", response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка запроса:", error);
    throw error;
  }
};
