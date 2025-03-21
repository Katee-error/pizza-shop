import { cn } from "@/shared/lib/utils";
import { Ingredient, ProductItem, Toping } from "@prisma/client";
import { Button, Title } from "@/components/ui";
import { ProductImage } from "../product/product-image";
import { ProductDetailVariant } from "../product/product-details-variant";
import { PizzaSize, PizzaType, pizzaTypes } from "@/shared/constants/pizza";
import { TopingItem } from "../topings/toping-item";
import { usePizzaOptions } from "@/shared/hooks/use-pizza-options";
import { getPizzaDetails } from "@/shared/lib/get-pizza-details";

interface Props {
  imageUrl: string;
  name: string;
  topings: Toping[];
  items: ProductItem[];
  loading?: boolean;
  onSubmit: (itemId: number, topings: number[]) => void;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  topings,
  loading,
  onSubmit,
  className,
}) => {
  const {
    size,
    type,
    selectedToping,
    availableSizes,
    currentItemId,
    setSize,
    setType,
    addToping,
  } = usePizzaOptions(items);

  const { totalPrice, textDetaills } = getPizzaDetails(
    type,
    size,
    items,
    topings,
    selectedToping,
  );

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedToping));
    }
  };

  return (
    <div className={cn(className, "flex flex-1")}>
      <ProductImage imageUrl={imageUrl} size={size} />
      <div className="w-[490px]  p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetaills}</p>

        <div className="flex flex-col gap-4 mt-5">
          <ProductDetailVariant
            items={availableSizes}
            selectedValue={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <ProductDetailVariant
            items={pizzaTypes}
            selectedValue={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>
        <p className="font-bold mt-6 mb-2 text-lg">Add toppings</p>

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-3">
          <div className="grid grid-cols-3 gap-3">
            {topings.map((toping) => (
              <TopingItem
                key={toping.id}
                name={toping.name}
                price={toping.price}
                imageUrl={toping.imageUrl}
                onClick={() => addToping(toping.id)}
                active={selectedToping.has(toping.id)}
              />
            ))}
          </div>
        </div>
        <Button
          loading={loading}
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Add to cart for {totalPrice}
        </Button>
      </div>
    </div>
  );
};
