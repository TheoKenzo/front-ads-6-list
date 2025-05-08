import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getEnvVariable(key: string | undefined, name: string): string {
  if (!key) {
    throw new Error(`Environment variable ${name} is not defined`);
  }

  return key;
}
