import { CartDTO } from "../services/dto/cart.dto";
import { CartStateItem } from "../store/cart";
import { calcCartItemTotalPrice } from "./calc-cart-item-total-price";

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
    const items = data.items.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      name: item.productItem.product.name,
      imageUrl: item.productItem.product.imageUrl,
      price: calcCartItemTotalPrice(item),
      pizzaSize: item.productItem.size,
      pizzaType: item.productItem.pizzaType,
      disabled: false,
      topings: item.topings.map((toping) => ({
        name: toping.name,
        price: toping.price,
      })),
    })) as CartStateItem[];
  
    return {
      items,
      totalAmount: data.totalAmount,
    };
  };


  