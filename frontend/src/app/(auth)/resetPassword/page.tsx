"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { ButtonLeft } from "@/app/components/ButtonLeft";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";

export default function page() {
  const [count, setCount] = useState(0);
  const Steps = [Step1, Step2, Step3][count];
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
  const router = useRouter();
  const HandleChangePage = () => {
    router.push("/signUp");
  };
  return (
    <div className="w-[416px] h-fit gap-6 flex flex-col">
      <div className="w-[416px] h-fit gap-6 flex flex-col">
        <ButtonLeft onClick={() => dicrease()} />
        <Steps
          onClick={() => increase()}
          onClickButton={() => HandleChangePage()}
        />
      </div>
    </div>
  );
}
