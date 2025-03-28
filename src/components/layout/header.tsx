"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container } from "./container";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { SearchInput } from "../shared/search/search-input";
import { CartButton } from "../shared/cart";
import { ProfileButton } from "../shared/profile/profile-button";
import { AuthModal } from "../shared/auth/auth-modal";
import { Logo } from "./logo";

interface Props {
  hasSearch?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({
  hasSearch = true,
  className,
}) => {
  const router = useRouter();
  const [openAuthModal, setOpenAuthModal] = React.useState(false);

  const searchParams = useSearchParams();

  React.useEffect(() => {
    let toastMessage = "";

    if (searchParams.has("paid")) {
      toastMessage = "Заказ успешно оплачен! Информация отправлена на почту.";
    }

    if (searchParams.has("verified")) {
      toastMessage = "Почта успешно подтверждена!";
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace("/");
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
    }
  }, []);

  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <Logo />
        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />

          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
        </div>
      </Container>
    </header>
  );
};
