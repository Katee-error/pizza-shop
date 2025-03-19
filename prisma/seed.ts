import { Prisma } from '@prisma/client';

import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';
import { categories, ingredients, products } from './model';

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 25 | 30 | 35;
}) => {
  return {
    productId,
    price: randomDecimalNumber(190, 400),
    pizzaType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User Test',
        email: 'user@test.ru',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin Admin',
        email: 'admin@test.ru',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Meaty with ajika',
      imageUrl:
        'https://media.dodostatic.com/image/r:584x584/0194b675952f74adb25ac725a1fdded9.webp',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Sweet pizza pie',
      imageUrl:
        'https://media.dodostatic.com/image/r:584x584/0193ba571345743db8a6758bb6a480ec.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0,1),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Pizza pastrami',
      imageUrl:
        'https://media.dodostatic.com/image/r:584x584/01958f430122789e975f705c3556e07f.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza4 = await prisma.product.create({
    data: {
      name: 'Meaty mix',
      imageUrl:
        'https://media.dodostatic.com/image/r:584x584/11efa00fc3e762b48bda77e6be758a14.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza5 = await prisma.product.create({
    data: {
      name: 'Dodo',
      imageUrl:
        'https://media.dodostatic.com/image/r:584x584/11eed854f2297224aed4d023a434721c.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza6 = await prisma.product.create({
    data: {
      name: 'Chorizo fresh',
      imageUrl:
        'https://media.dodostatic.com/image/r:584x584/11eec4b03a33b20dbeada74187bb7b57.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza7 = await prisma.product.create({
    data: {
      name: 'Pesto pizza',
      imageUrl:
        '	https://media.dodostatic.com/image/r:584x584/11eec563863b334db30ff678fa43e096.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza8 = await prisma.product.create({
    data: {
      name: 'Pizza Julien',
      imageUrl:
        'https://media.dodostatic.com/image/r:584x584/11eec4b2f394cdaeb93192e939527270.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza9 = await prisma.product.create({
    data: {
      name: 'Arriva!',
      imageUrl:
        '	https://media.dodostatic.com/image/r:584x584/11eec566b2abbaae9191035e3bce5733.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza10 = await prisma.product.create({
    data: {
      name: 'Cheese pizza',
      imageUrl:
        '	https://media.dodostatic.com/image/r:584x584/11eec4ac84e99117a83bdb8e08b0727b.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza11 = await prisma.product.create({
    data: {
      name: 'Pepperoni fresh',
      imageUrl:
        '	https://media.dodostatic.com/image/r:584x584/11eec4aebae7a579b6b226a12dc0c261.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza12 = await prisma.product.create({
    data: {
      name: 'Margherita',
      imageUrl:
        'https://media.dodostatic.com/image/r:584x584/11eec3c35eeac2d49e7a4479d50aa926.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza13 = await prisma.product.create({
    data: {
      name: 'Ham & Cheese',
      imageUrl:
        'https://media.dodostatic.com/image/r:584x584/11eec3c44c8a9a739c7bcf4cb340c09c.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza14 = await prisma.product.create({
    data: {
      name: 'Ham and mushrooms',
      imageUrl:
        'https://media.dodostatic.com/image/r:584x584/11eed176b5260a8bb06fac9778d82ae0.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza15 = await prisma.product.create({
    data: {
      name: 'Double chicken',
      imageUrl:
        'https://media.dodostatic.com/image/r:584x584/11eed1763ee63349ba0ed174286f0232.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza16 = await prisma.product.create({
    data: {
      name: 'Burger pizza',
      imageUrl:
        '	https://media.dodostatic.com/image/r:584x584/11eec56831956a049579024842952c6a.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza17 = await prisma.product.create({
    data: {
      name: 'Four seasons',
      imageUrl:
        '	https://media.dodostatic.com/image/r:584x584/11eed1777aabb06b92c5aa3d70e65605.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza18 = await prisma.product.create({
    data: {
      name: 'Hawaiian',
      imageUrl:
        '	https://media.dodostatic.com/image/r:584x584/11eec56ab6ea26d68cf2f4f72809c471.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza19 = await prisma.product.create({
    data: {
      name: 'Vegetables and mushrooms',
      imageUrl:
        'https://media.dodostatic.com/image/r:584x584/11eed178363e7a42a491b14a5ed9e855.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza20 = await prisma.product.create({
    data: {
      name: 'Four Cheese',
      imageUrl:
        '	https://media.dodostatic.com/image/r:584x584/11eed5305389a6ada9ac1df3c6498dc9.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });
  const pizza21 = await prisma.product.create({
    data: {
      name: 'Chicken BBQ',
      imageUrl:
        '	https://media.dodostatic.com/image/r:584x584/11eed530b7932a07a84baf28985b4182.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      // Meaty with ajika"
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 35 }),
      // Sweet pizza pie"
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 35 }),
      // Pizza pastrami"
      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 35 }),
      // Meaty mix"
      generateProductItem({ productId: pizza4.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 2, size: 35 }),
      //Dodo"
      generateProductItem({ productId: pizza5.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza5.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza5.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza5.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza5.id, pizzaType: 2, size: 35 }),
      // Chorizo fresh"
      generateProductItem({ productId: pizza6.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza6.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza6.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza6.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza6.id, pizzaType: 2, size: 35 }),
      // Pesto pizza"
      generateProductItem({ productId: pizza7.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza7.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza7.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza7.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza7.id, pizzaType: 2, size: 35 }),
      // Pizza Julien"
      generateProductItem({ productId: pizza8.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza8.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza8.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza8.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza8.id, pizzaType: 2, size: 35 }),
      // Arriva!"
      generateProductItem({ productId: pizza9.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza9.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza9.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza9.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza9.id, pizzaType: 2, size: 35 }),
      // Cheese pizza"
      generateProductItem({ productId: pizza10.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza10.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza10.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza10.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza10.id, pizzaType: 2, size: 35 }),
      // Pepperoni fresh"
      generateProductItem({ productId: pizza11.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza11.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza11.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza11.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza11.id, pizzaType: 2, size: 35 }),
      // Margherita'"
      generateProductItem({ productId: pizza12.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza12.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza12.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza12.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza12.id, pizzaType: 2, size: 35 }),
      // Ham & Cheese"
      generateProductItem({ productId: pizza13.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza13.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza13.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza13.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza13.id, pizzaType: 2, size: 35 }),
      // Ham and mushrooms"
      generateProductItem({ productId: pizza14.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza14.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza14.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza14.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza14.id, pizzaType: 2, size: 35 }),
      // Four seasons"
      generateProductItem({ productId: pizza15.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza15.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza15.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza15.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza15.id, pizzaType: 2, size: 35 }),
      // Hawaiian'"
      generateProductItem({ productId: pizza16.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza16.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza16.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza16.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza16.id, pizzaType: 2, size: 35 }),
      // Pepperoni fresh"
      generateProductItem({ productId: pizza17.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza17.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza17.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza17.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza17.id, pizzaType: 2, size: 35 }),
      // Vegetables and mushrooms'"
      generateProductItem({ productId: pizza18.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza18.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza18.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza18.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza18.id, pizzaType: 2, size: 35 }),
      // Four Cheese"
      generateProductItem({ productId: pizza19.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza19.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza19.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza19.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza19.id, pizzaType: 2, size: 35 }),
      // Chicken BBQ'"
      generateProductItem({ productId: pizza20.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza20.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza20.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza20.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza20.id, pizzaType: 2, size: 35 }),
      // Chicken BBQ'"
      generateProductItem({ productId: pizza21.id, pizzaType: 1, size: 25 }),
      generateProductItem({ productId: pizza21.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza21.id, pizzaType: 1, size: 35 }),
      generateProductItem({ productId: pizza21.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza21.id, pizzaType: 2, size: 35 }),
   

      // Остальные продукты
      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
      generateProductItem({ productId: 10 }),
      generateProductItem({ productId: 11 }),
      generateProductItem({ productId: 12 }),
      generateProductItem({ productId: 13 }),
      generateProductItem({ productId: 14 }),
      generateProductItem({ productId: 15 }),
      generateProductItem({ productId: 16 }),
      generateProductItem({ productId: 17 }),
      generateProductItem({ productId: 18 }),
      generateProductItem({ productId: 19 }),
      generateProductItem({ productId: 20 }),
      generateProductItem({ productId: 21 }),
      generateProductItem({ productId: 22 }),
      generateProductItem({ productId: 23 }),
      generateProductItem({ productId: 24 }),
      generateProductItem({ productId: 25 }),
      generateProductItem({ productId: 26 }),
      generateProductItem({ productId: 27 }),
      generateProductItem({ productId: 28 }),
      generateProductItem({ productId: 29 }),
      generateProductItem({ productId: 30 }),
      generateProductItem({ productId: 31 }),
      generateProductItem({ productId: 32 }),
      generateProductItem({ productId: 33 }),
      generateProductItem({ productId: 34 }),
      generateProductItem({ productId: 35 }),
      generateProductItem({ productId: 36 }),
      generateProductItem({ productId: 37 }),
      generateProductItem({ productId: 38 }),
      generateProductItem({ productId: 39 }),
      generateProductItem({ productId: 40 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '11111',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '222222',
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });

  await prisma.story.createMany({
    data: [
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496',
      },
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/km2/9gf/jrn/sb7ls1yj9fe5bwvuwgym73e/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3074015640',
      },
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/quw/acz/zf5/zu37vankpngyccqvgzbohj1/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=1336215020',
      },
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/7oc/5nf/ipn/oznceu2ywv82tdlnpwriyrq/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=38903958',
      },
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/q0t/flg/0ph/xt67uw7kgqe9bag7spwkkyw/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=2941222737',
      },
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/lza/rsp/2gc/xrar8zdspl4saq4uajmso38/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=4207486284',
      },
    ],
  });

  await prisma.storyItem.createMany({
    data: [
      {
        storyId: 1,
        sourceUrl:
          'https://cdn.inappstory.ru/file/dd/yj/sx/oqx9feuljibke3mknab7ilb35t.webp?k=IgAAAAAAAAAE',
      },
      {
        storyId: 1,
        sourceUrl:
          'https://cdn.inappstory.ru/file/jv/sb/fh/io7c5zarojdm7eus0trn7czdet.webp?k=IgAAAAAAAAAE',
      },
      {
        storyId: 1,
        sourceUrl:
          'https://cdn.inappstory.ru/file/ts/p9/vq/zktyxdxnjqbzufonxd8ffk44cb.webp?k=IgAAAAAAAAAE',
      },
      {
        storyId: 1,
        sourceUrl:
          'https://cdn.inappstory.ru/file/ur/uq/le/9ufzwtpdjeekidqq04alfnxvu2.webp?k=IgAAAAAAAAAE',
      },
      {
        storyId: 1,
        sourceUrl:
          'https://cdn.inappstory.ru/file/sy/vl/c7/uyqzmdojadcbw7o0a35ojxlcul.webp?k=IgAAAAAAAAAE',
      },
    ],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
