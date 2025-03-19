export const mapPizzaSize = {
    25: '25cm',
    30: '30cm',
    35: '35cm',
  } as const;
  
  export const mapPizzaType = {
    1: 'Traditional',
    2: 'Thin',
  } as const;

  export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
    name,
    value,
  }));
  
  export const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
    name,
    value,
  }));
  
  export type PizzaSize = keyof typeof mapPizzaSize;
  export type PizzaType = keyof typeof mapPizzaType;
  