import { z } from "zod";

export type AccessKeyFormSchemaInput = z.input<typeof accessKeyFormSchema>;

export type AccessKeyFormSchemaOutput = z.output<typeof accessKeyFormSchema>;

export const accessKeyFormSchema = z.object({
  accessKey: z
    .string()
    .min(1, { message: "Necessário informar a chave de acesso" }),
});
