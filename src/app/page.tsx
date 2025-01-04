import { Container, TopBar } from "@/components/layout";
import { Title } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
import { ProductCard, ProductList } from "@/components/shared/product";
// import { useTranslation } from "react-i18next";

export default function Home() {
  // const { t } = useTranslation("homePage");
  return (
    <div>
      <Container className="mt-5">
        <Title text={"Все продукты"} size="lg" className="font-bold" />
      </Container>
      <TopBar />
      {/* <div style={{ height: "3000px" }} /> */}
      <Container className="pb-14 mt-10">
        <div className="flex gap-[100px]">
          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Products List */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductList
                title={"Пиццы"}
                products={[
                  {
                    id: 1,
                    name: "Маргарита",
                    price: 120,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.jpg",
                  },
                  {
                    id: 2,
                    name: "Маргарита",
                    price: 120,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.jpg",
                  },
                  {
                    id: 3,
                    name: "Маргарита",
                    price: 120,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.jpg",
                  },
                  {
                    id: 4,
                    name: "Маргарита",
                    price: 120,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.jpg",
                  },
                  {
                    id: 5,
                    name: "Маргарита",
                    price: 120,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.jpg",
                  },
                  {
                    id: 6,
                    name: "Маргарита",
                    price: 120,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.jpg",
                  },
                 
                ]}
                categoryId={1}
              />
              <ProductList
                title={"Комбо"}
                products={[
                  {
                    id: 1,
                    name: "Маргарита",
                    price: 120,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.jpg",
                  },
                  {
                    id: 2,
                    name: "Маргарита",
                    price: 120,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.jpg",
                  },
                  {
                    id: 3,
                    name: "Маргарита",
                    price: 120,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.jpg",
                  },
              
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
