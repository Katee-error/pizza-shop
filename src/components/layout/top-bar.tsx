import React from "react";
import { cn } from "@/lib/utils";
import { Categories } from "../shared/categories";
import { SortPopup } from "../shared/filters";
import { Container } from "./container";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-end justify-between ">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
