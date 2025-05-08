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
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  signInFormSchema,
  SignInFormSchemaInput,
  SignInFormSchemaOutput,
} from "./sign-form.schema";

export default function SignIn() {
  const router = useRouter();

  const signinForm = useForm<
    SignInFormSchemaInput,
    unknown,
    SignInFormSchemaOutput
  >({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen">
      <Card className="max-w-[480px] w-full">
        <CardHeader className="flex flex-col gap-4 w-full">
          <CardTitle className="flex gap-2 items-center">
            <Button
              variant="ghost"
              className="rounded-full p-1"
              onClick={router.back}
            >
              <CaretLeft size={16} weight="bold" />
            </Button>
            Cadastrar-se
          </CardTitle>
          <CardContent className="flex flex-col w-full p-0">
            <Form {...signinForm}>
              <form
                onSubmit={signinForm.handleSubmit(() => {})}
                className="flex flex-col gap-2 w-full"
              >
                <FormField
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="E-mail" {...field} type="email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Senha" {...field} type="password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end w-full gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-primary text-primary font-bold"
                    onClick={() => router.push("/login")}
                  >
                    Entrar
                  </Button>

                  <Button className="font-bold">
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
