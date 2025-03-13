import { z } from "zod";

export type KeyAccessFormSchemaInput = z.input<typeof keyAccessFormSchema>;

export type KeyAccessFormSchemaOutput = z.output<typeof keyAccessFormSchema>;

export const keyAccessFormSchema = z.object({
  keyAccess: z
    .string()
    .min(1, { message: "Necessário informar a chave de acesso" }),
});
