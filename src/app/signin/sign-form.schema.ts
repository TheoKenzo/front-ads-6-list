import { z } from "zod";

export type SignInFormSchemaInput = z.input<typeof signInFormSchema>;

export type SignInFormSchemaOutput = z.output<typeof signInFormSchema>;

export const signInFormSchema = z.object({
  name: z.string().min(1, { message: "Necessário informar o nome" }),
  email: z.string().email({ message: "E-mail inválido" }),
  password: z.string().min(10, { message: "Mínimo de 10 caracteres" }),
});
