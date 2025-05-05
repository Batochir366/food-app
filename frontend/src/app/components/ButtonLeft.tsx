import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import React from "react";

export const ButtonLeft = ({ onClick }: { onClick: () => void }) => {
  const router = useRouter();
  return (
    <Button onClick={onClick} variant="outline" size="icon">
      <ChevronLeft />
    </Button>
  );
};
