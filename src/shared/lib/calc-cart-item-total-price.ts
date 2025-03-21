import { CartItemDTO } from '../services/dto/cart.dto';

export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
  const topingsPrice = item.topings.reduce((acc, toping) => acc + toping.price, 0);

  return (topingsPrice + item.productItem.price) * item.quantity;
};
