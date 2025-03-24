import { Button, Title } from "@/components/ui";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "../../form-components";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginSchema, FormLoginValues } from "./schemas";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

interface Props {
  onClose?: () => void;
}

export const LoginForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<FormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormLoginValues) => {
    try {
      const resp = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (!resp?.ok) {
        throw Error();
      }

      toast.success("You have successfully logged into your account", {
        icon: "✅",
      });

      onClose?.();
    } catch (error) {
      console.error("Error [LOGIN]", error);
      toast.error("Unable to log in to account", {
        icon: "❌",
      });
    }
  };
  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <Title text="Account Login" size="md" className="font-bold" />
            <p className="text-gray-400">
            Enter your email to log in to your account 
            </p>
          </div>
          <img
            src="/assets/images/phone-icon.png"
            alt="phone-icon"
            width={60}
            height={60}
          />
        </div>

        <FormInput name="email" label="E-Mail" required />
        <FormInput name="password" label="Password" type="password" required />

        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
          Log in
        </Button>
      </form>
    </FormProvider>
  );
};
