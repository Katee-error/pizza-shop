import { Container, TopBar } from "@/components/layout";
import { Filters } from "@/components/shared/filters";
import { ProductList } from "@/components/shared/product";
import { Stories } from "@/components/shared/stories/stories";
import { findPizzas, GetSearchParams } from "@/shared/lib/find-products";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: GetSearchParams;
}) {
  const categories = await findPizzas(searchParams);

  return (
    <div>
      <TopBar
        categories={categories.filter(
          (category) => category.products.length > 0
        )}
      />
      <Stories />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[100px]">
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map((category) =>
                category.products?.length ? (
                  <ProductList
                    key={category.id}
                    title={category.name}
                    categoryId={category.id}
                    items={category.products ?? []} 
                  />
                ) : null
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
