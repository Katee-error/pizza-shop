import React from "react";
import { Container } from "./container";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import { Button } from "../ui";
import { User } from "lucide-react";
import { SearchInput } from "../shared/search/search-input";
import { CartButton } from "../shared/cart";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border-b border-gray-100", className)}>
      <Container className="flex items-center justify-between py-6">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" width={35} height={35} alt="Logo" />
          <div>
            <h1 className="text-2xl uppercase font-black">Dodo Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              вкусней уже некуда
            </p>
          </div>
        </div>
        <div className="mx-10 flex-1 ">
          <SearchInput />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <User size={18} />
            Войти
          </Button>
          <CartButton />
        </div>
      </Container>
    </header>
  );
};
