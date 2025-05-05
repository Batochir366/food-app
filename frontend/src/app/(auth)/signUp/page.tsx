"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { ButtonLeft } from "@/app/components/ButtonLeft";
import { Step1sign } from "./components/Step1sign";
import { Step2sign } from "./components/Step2sign";

export default function page() {
  const [count, setCount] = useState(0);
  const Steps = [Step1sign, Step2sign][count];

  const router = useRouter();
  const HandleChangePage = () => {
    router.push("/login");
  };
  const increase = () => {
    if (count >= 0 && count <= 2) {
      setCount(count + 1);
    }
  };
  const dicrease = () => {
    if (count >= 0 && count <= 2) {
      setCount(count - 1);
    }
  };
  return (
    <div className="w-[416px] h-fit gap-6 flex flex-col">
      <div className="w-[416px] h-fit gap-6 flex flex-col">
        <ButtonLeft onClick={() => dicrease()} />
        <Steps onClick={() => increase()} />
      </div>
    </div>
  );
}
