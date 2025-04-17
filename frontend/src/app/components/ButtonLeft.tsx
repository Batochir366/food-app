import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import React from "react";

export const ButtonLeft = () => {
  const router = useRouter();
  const HandlePageToHome = () => {
    router.push("/");
  };
  return (
    <Button onClick={() => HandlePageToHome()} variant="outline" size="icon">
      <ChevronLeft />
    </Button>
  );
};
