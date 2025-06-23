"use client";

import { useGetTodoLists } from "@/api/todolist/hooks";
import { FormattedToDoResponse } from "@/api/todolist/interfaces/dto/in/formatted-todo-response";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Briefcase } from "lucide-react";
import { useState } from "react";

export default function Application() {
  const [progress, setProgress] = useState(0);

  const { data: todoLists } = useGetTodoLists();

  const calculatedProgress = 100 / todoLists?.length || 0;

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen">
      <Card className="w-full max-w-2xl p-4">
        <h1 className="font-semibold text-gray-400"> Atividades da semana </h1>

        <div className="flex items-center gap-2 px-4">
          <Briefcase />
          <Progress value={progress} className="w-full" />
        </div>

        <div className="px-4">
          {todoLists?.map((list: FormattedToDoResponse) => (
            <div key={list.id} className="mt-4 flex items-center gap-2">
              <Checkbox
                onCheckedChange={(checked) => {
                  checked
                    ? setProgress((prev) => prev + calculatedProgress)
                    : setProgress((prev) => prev - calculatedProgress);
                }}
              />

              <div className="flex flex-col ">
                <h2 className="text-lg font-semibold">{list.title}</h2>
                <span className="text-gray-400">{list.ownerName}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </main>
  );
}
