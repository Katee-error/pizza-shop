'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { formRegisterSchema, FormRegisterValues } from './schemas';
import { FormInput } from '../../form-components';
import { Button } from '@/components/ui';
import { registerUser } from '@/app/actions';


interface Props {
  onClose?: VoidFunction;
  onClickLogin?: VoidFunction;
}

export const RegisterForm: React.FC<Props> = ({ onClose, onClickLogin }) => {
  const form = useForm<FormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: FormRegisterValues) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.error('Registration successful 📝. Confirm your e-mail', {
        icon: '✅',
      });

      onClose?.();
    } catch (error) {
      return toast.error('Invalid E-Mail or password', {
        icon: '❌',
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
        <FormInput name="email" label="E-Mail" required />
        <FormInput name="fullName" label="Full name" required />
        <FormInput name="password" label="Password" type="password" required />
        <FormInput name="confirmPassword" label="Confirm password" type="password" required />

        <Button loading={form.formState.isSubmitting} className="h-12 text-base" type="submit">
        Sign up
        </Button>
      </form>
    </FormProvider>
  );
};
