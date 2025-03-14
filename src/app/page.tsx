"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  keyAccessFormSchema,
  KeyAccessFormSchemaInput,
  KeyAccessFormSchemaOutput,
} from "./key-access-form-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CaretRight } from "@phosphor-icons/react";

export default function Home() {
  const keyAccessForm = useForm<
    KeyAccessFormSchemaInput,
    unknown,
    KeyAccessFormSchemaOutput
  >({
    resolver: zodResolver(keyAccessFormSchema),
    defaultValues: {
      keyAccess: "",
    },
  });

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen">
      <Card className="max-w-[480px] w-full">
        <CardHeader className="flex flex-col gap-4 w-full">
          <CardTitle>Chave de acesso</CardTitle>
          <CardContent className="flex flex-col w-full p-0">
            <Form {...keyAccessForm}>
              <form
                onSubmit={keyAccessForm.handleSubmit(() => {
                  console.log("submit");
                })}
                className="flex flex-col gap-2 w-full"
              >
                <FormField
                  name="keyAccess"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Chave" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end w-full">
                  <Button>
                    Prosseguir{" "}
                    <CaretRight size={16} color="#fcfcfc" weight="bold" />
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </CardHeader>
      </Card>
    </main>
  );
}
