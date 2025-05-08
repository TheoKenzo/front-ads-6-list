import { z } from "zod";

export type LogInFormSchemaInput = z.input<typeof logInFormSchema>;

export type LogInFormSchemaOutput = z.output<typeof logInFormSchema>;

export const logInFormSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z.string().min(1, { message: "Necessário informar a senha" }),
});
