import { z } from 'zod';

export const passwordSchema = z.string().min(4, { message: 'Enter the correct password' });

export const formLoginSchema = z.object({
  email: z.string().email({ message: 'Enter the correct email' }),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      fullName: z.string().min(1, { message: 'Enter first and last name' }),
      confirmPassword: passwordSchema,
    }),
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: 'The passwords don`t match',
    path: ['confirmPassword'],
  });

export type FormLoginValues = z.infer<typeof formLoginSchema>;
export type FormRegisterValues = z.infer<typeof formRegisterSchema>;
