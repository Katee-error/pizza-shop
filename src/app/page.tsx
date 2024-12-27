import { Container, TopBar } from "@/components/layout";
import { Title } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
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
        <div className="flex gap-[60px]">
          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Products List */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Products list</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
