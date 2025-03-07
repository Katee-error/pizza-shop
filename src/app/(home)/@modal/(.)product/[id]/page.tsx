import { notFound } from "next/navigation";
import { Container } from "@/components/layout";
import { ProductImage } from "@/components/shared/product/product-image";
import { Title } from "@/components/shared";
import { ProductDetailVariant } from "@/components/shared/product/product-details-variant";
import { prisma } from "../../../../../../prisma/prisma-client";

export default async function ProductModalPage ({ params: { id } }: { params: { id: string } }) {
  console.log("product id", id);
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }
  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} size={30} />

        <div className="w-[490px] bg-[#fcfcfc] p-7">
          <Title text={product.name} />
          <ProductDetailVariant
            selectedValue="2"
            items={[
              {
                name: "Маленькая",
                value: "1",
              },
              {
                name: "Средняя",
                value: "2",
              },
              {
                name: "Большая",
                value: "3",
                disabled: true,
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
