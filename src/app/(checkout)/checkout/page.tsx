"use client";
import { Container } from "@/components/layout";
import { CheckoutCart } from "@/components/shared/checkout";
import { CheckoutSidebar } from "@/components/shared/checkout/checkout-sidebar";
import { Title } from "@/components/ui";
import { CheckoutFormValues, checkoutFormSchema } from "@/shared/constants/checkout-form-schema";
import { useCart } from "@/shared/hooks/use-cart";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
    useCart();
  const [submitting, setSubmitting] = useState(false);

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      adress: '',
      comment: '',
    },
  });


  return (
    <Container className="mt-10">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <CheckoutCart
            onClickCountButton={onClickCountButton}
            removeCartItem={removeCartItem}
            items={items}
            loading={loading}
          />

          {/* <CheckoutPersonalForm className={loading ? 'opacity-40 pointer-events-none' : ''} />

              <CheckoutAddressForm className={loading ? 'opacity-40 pointer-events-none' : ''} /> */}
        </div>

        <div className="w-[450px]">
          <CheckoutSidebar
            totalAmount={totalAmount}
            loading={loading || submitting}
          />
        </div>
      </div>
    </Container>
  );
}
