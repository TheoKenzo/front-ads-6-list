"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFoundOrUnauthorized() {
  const router = useRouter();
  const [dots, setDots] = useState("");

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push("/");
    }, 5000);

    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length < 5 ? prev + " . " : ""));
    }, 1000);

    return () => {
      clearTimeout(redirectTimeout);
      clearInterval(dotInterval);
    };
  }, [router]);

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen">
      <p>You shouldn't be here{dots}</p>
      <p className="font-semibold">{`ʘᆽʘ`}</p>
    </main>
  );
}
