import { Title } from "../../ui/title";
import { Button } from "@/components/ui";
import { cn } from "@/shared/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  count?: number;
  children?: React.ReactNode;
}

export const ProductCard: React.FC<Props> = ({
  className,
  name,
  price,
  imageUrl,
  // count,
  id,
}) => {
  return (
    <div className={cn(className)}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-white shadow-sm rounded-sm h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt="Logo" />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
          альфредо, чеснок
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>
          {/* {count ? (
          <CountButton value={count} size="lg" />
        ) : ( */}
          <Button variant="secondary">
            <Plus className="w-4 h-4 mr-1" />
            Добавить
          </Button>
          {/* )} */}{" "}
        </div>
      </Link>
    </div>
  );
};
