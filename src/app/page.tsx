import { Container, TopBar } from "@/components/layout";
import { Title } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
import { ProductList } from "@/components/shared/product";
import { prisma } from "../../prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          variants: true,
        },
      },
    },
  });
  console.log(categories);
  return (
    <div>
      <Container className="mt-5">
        <Title text={"Все продукты"} size="lg" className="font-bold" />
      </Container>
      <TopBar categories={categories.filter((category) => category.products.length > 0)} />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[100px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      products={category.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
