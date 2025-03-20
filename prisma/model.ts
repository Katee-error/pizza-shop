export const categories = [
  {
    name: "Pizza",
  },
  {
    name: "Snakes",
  },
  {
    name: "Desserts",
  },
  {
    name: "Drinks",
  },
  {
    name: "Sauces",
  },
  {
    name: "Breakfast",
  },

];

export const ingredients = [
  {
    name: "Cheddar cheese Crust",
    price: 179,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11eeedbd0b60e5a4812d238e0a79ac78.png",
  },
  {
    name: "Сhicken",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11eec19f23e58a7bb203a7857adf710e.png",
  },
  {
    name: "Ham",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11eec1a05c185d73bf8e6584a9a233b8.png",
  },
  {
    name: "Pepperoni",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11eec1a6a737c6e5a7aad83182259828.png",
  },
  {
    name: "Spicy chorizo",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11eec4af2e8c11d8a7dfb5222f1a325a.png",
  },
  {
    name: "Oregano",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11eec3bb8122e51c96d7b468e95c37aa.png",
  },
  {
    name: "Tomatoes",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11eec3bc0a2af1c2b3b9959b55efd730.png",
  },
  {
    name: "Mushrooms",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11eec3bc7f35c31795ed766a458e5edd.png",
  },
  {
    name: "Red onion",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11eec3bde9270ceeb170364a0d3f78a9.png",
  },
  {
    name: "Green pepper",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11eec3be6a20c3c8964ecde6bfac34e2.png",
  },
  {
    name: "Jalapeno",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11eec3bea346c7dc85c0344d517bad5a.png",
  },
  {
    name: "Mozzarella",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11eec1a5a3c59c5789cb54ce64311874.png",
  },
  {
    name: "Bacon",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.com/static/Img/Ingredients/01943b6bfbfa7785a479f8b0aa005c27.png",
  },
  {
    name: "Blue cheese",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.com/static/Img/Ingredients/01943b6b90b973989bc8dab34a4dc009.png",
  },
  {
    name: "Pineapples",
    price: 39,
    imageUrl:
      "https://cdn.dodostatic.com/static/Img/Ingredients/01943b6b577a796197eec0c9fe0d69ba.png",
  },
  {
    name: "Pickles",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.com/static/Img/Ingredients/01943b6bc5b87233aa985f29d1c85a28.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Dodster",
    imageUrl:
    "https://media.dodostatic.com/image/r:1875x1875/11eec576317664f0b73e9c210ef75caa.avif",
    categoryId: 2,
  },
  {
    name: "Spicy Dodster🌶️🌶️",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eec57cd9a8011488fd5af138fd4d13.avif",
    categoryId: 2,
  },
  {
    name: "Pesto dodster",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eee53246b2a477818ac7e7fc96a52a.avif",
    categoryId: 2,
  },
  {
    name: "Meat starter ",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eee5f6c88ea779891e392fc3bc0033.avif",
    categoryId: 2,
  },
  {
    name: "Mushroom starter",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eeecdbbba13a91aec81db095125a63.avif",
    categoryId: 2,
  },
  {
    name: "Cheese starter ",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11ef0898add9b56dad07ae758219ea99.avif",
    categoryId: 2,
  },
  {
    name: "Dodster with ham ",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eec57c53b26ed4b0ed9cd9a5350245.avif",
    categoryId: 2,
  },
  {
    name: "Danwich ham and cheese ",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eec578360fd5028dbff4d01d8ae2b7.avif",
    categoryId: 2,
  },
  {
    name: "Danwich Chorizo ​BBQ ",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eec57913c65f46bfbf07f213acbf97.avif",
    categoryId: 2,
  },
  {
    name: "Ceasar salad",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11ef1b36e1996cf6833003a5107ab6cd.avif",
    categoryId: 2,
  },
  {
    name: "Greek salad ",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11ef1997296e72128645d2d15b9014f5.avif",
    categoryId: 2,
  },
  {
    name: "Pasta Carbonara",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eec57a5bd7250e9b0afbaf20cb32e0.avif",
    categoryId: 2,
  },
  {
    name: "Hawaiian pasta",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11ef638d2669d11795b2e17f8c18245b.avif",
    categoryId: 2,
  },
  {
    name: "Pesto Pasta ",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eec57b5494bf01bae93593bfa49bb0.avif",
    categoryId: 2,
  },
  {
    name: "Baked Fries",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eec5771de544bfbad5a8b8652e7ecb.avif",
    categoryId: 2,
  },
  {
    name: "New York Cheesecake",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eec57fc23475e989640c570cacfb7c.avif",
    categoryId: 3,
  },
  {
    name: "Chocolate Souffle",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eec57eff24a7eda124add63354612e.avif",
    categoryId: 3,
  },
  {
    name: "Muffin salted caramel",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eed6f2baba83f9ad2e3019d72565a4.avif",
    categoryId: 3,
  },
  {
    name: "Eclairs 3 pieces",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eed6f3a7abb22c9fecd66768fe0f5c.avif",
    categoryId: 3,
  },
  {
    name: "Chocolate cookie",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eed6f33571882083d67b9848ce8de7.avif",
    categoryId: 3,
  },
  {
    name: "Rolls with pineapple and ice cream sauce",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eed6f5b8514d5a96078226828e81a0.avif",
    categoryId: 3,
  },
  {
    name: "Berry rolls",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11ef1734765479ca9678114ba0600cd0.avif",
    categoryId: 3,
  },
  {
    name: "Banana milkshake",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp",
    categoryId: 4,
  },
  {
    name: "Coffee Americano",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eec5834f7894e6997b1f5eec52d593.avif",
    categoryId: 4,
  },
  {
    name: "Coffee Cappuccino",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eec583d21d304399b9bf0cd3f0607b.avif",
    categoryId: 4,
  },
  {
    name: "Coffee Latte",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eec58470c3e30993a87d723055022d.avif",
    categoryId: 4,
  },
  {
    name: "Coca-Cola",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eec58025f42f8883a44ff3f74c2e85.avif",
    categoryId: 4,
  },
  {
    name: "Fanta",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eed7f5d7be976f84fb4c56580cdb2a.avif",
    categoryId: 4,
  },
  {
    name: "Sprite",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eec582165399bb8aabb23e10f5cf7b.avif",
    categoryId: 4,
  },
  {
    name: "Cappy Orange",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11ef3deab6dae1599c7fbd780cdde560.avif",
    categoryId: 4,
  },
  {
    name: "Water",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eed7daa98e3a5ea3eb7b250e0223de.avif",
    categoryId: 4,
  },
  {
    name: "Cheese sauce",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11ef1c1de3aaa0a78193c3460698f3bd.avif",
    categoryId: 5,
  },
  {
    name: "Barbecue sauce",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eed77dc8bbd0639d4157df0159d52c.avif",
    categoryId: 5,
  },
  {
    name: "Garlic sauce",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eed77e0817f876adc8948640007b01.avif",
    categoryId: 5,
  },
  {
    name: "Dodster",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eec576317664f0b73e9c210ef75caa.avif",
    categoryId: 6,
  },
  {
    name: "Cheese starter",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11ef0898add9b56dad07ae758219ea99.avif",
    categoryId: 6,
  },
  {
    name: "Danwich ham and cheese",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eec578360fd5028dbff4d01d8ae2b7.avif",
    categoryId: 6,
  },
  {
    name: "Dodster with ham",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eec57c53b26ed4b0ed9cd9a5350245.avif",
    categoryId: 6,
  },
  {
    name: "Meat starter",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eee5f6c88ea779891e392fc3bc0033.avif",
    categoryId: 6,
  },
  {
    name: "Cinnamon rolls",
    imageUrl:
      "https://media.dodostatic.com/image/r:1875x1875/11eed6f508432e0ca19d96c930500106.avif",
    categoryId: 6,
  },

];
