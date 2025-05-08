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
  accessKeyFormSchema,
  AccessKeyFormSchemaInput,
  AccessKeyFormSchemaOutput,
} from "./key-access-form-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CaretRight } from "@phosphor-icons/react";
import { useState } from "react";
import { useVerifyAccessKey } from "@/api/auth/hooks";
import { AxiosError } from "axios";

export default function Home() {
  const accessKeyForm = useForm<
    AccessKeyFormSchemaInput,
    unknown,
    AccessKeyFormSchemaOutput
  >({
    resolver: zodResolver(accessKeyFormSchema),
    defaultValues: {
      accessKey: "",
    },
  });

  const { mutateAsync: verifyAccessKey } = useVerifyAccessKey();

  const handleVerifyAccessKey = async (data: AccessKeyFormSchemaOutput) => {
    try {
      const response = await verifyAccessKey({ accessKey: data.accessKey });
      console.log("sucesso: ", response);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log("error: ", error.response?.data);
      } else {
        console.log("error: ", error);
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen">
      <Card className="max-w-[480px] w-full">
        <CardHeader className="flex flex-col gap-4 w-full">
          <CardTitle>Chave de acesso</CardTitle>
          <CardContent className="flex flex-col w-full p-0">
            <Form {...accessKeyForm}>
              <form
                onSubmit={accessKeyForm.handleSubmit(handleVerifyAccessKey)}
                className="flex flex-col gap-2 w-full"
              >
                <FormField
                  name="accessKey"
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
