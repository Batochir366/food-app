"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import { useState } from "react";

export const Step3 = ({ onClickButton }: { onClickButton?: () => void }) => {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div>
        <h1 className="text-[24px] font-[600]">Create new password</h1>
        <p className="text-[16px] text-[#71717A]">
          Set a new password with a combination of letters and numbers for
          better security.
        </p>
      </div>
      <div className="flex items-start flex-col gap-4">
        <div className="flex flex-col gap-2 w-full">
          <Input
            type={isChecked ? "password" : "text"}
            className=" focus-visible:outline-none"
            placeholder="Password"
          />

          <Input
            type={isChecked ? "password" : "text"}
            className="focus-visible:outline-none"
            placeholder="Confirm"
          />
          <p className="text-[14px] text-[#EF4444]">
            Those password did’t match, Try again
          </p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <Checkbox onClick={() => handleCheckBox()} />
          <p className="text-[#71717A] font-[14px] cursor-pointer">
            Show password
          </p>
        </div>
      </div>
      <Button
        onClick={onClickButton}
        className="w-[416px] h-[36px] bg-black text-white rounded-md"
      >
        Create password
      </Button>
    </>
  );
};
