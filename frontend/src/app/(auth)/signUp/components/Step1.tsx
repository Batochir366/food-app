import { ButtonLeft } from "@/app/components/ButtonLeft";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";

import React from "react";

const Step1 = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="w-[416px] h-fit gap-6 flex flex-col">
      <ButtonLeft />
      <div>
        <h1 className="text-[24px] font-[600]">Create your account</h1>
        <p className="text-[16px] text-[#71717A]">
          sign up to enjoy your favorite dishes.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Input
          className=" focus-visible:outline-none"
          placeholder="Enter your email address"
        />
        <p className="text-[14px] text-[#EF4444]">
          Those password did’t match, Try again
        </p>
      </div>
      <Button className="w-[416px] h-[36px] bg-black text-white rounded-md">
        Let`s go
      </Button>
      <div className="flex w-full justify-center gap-3">
        <p className="text-[#71717A]">Already have an account?</p>
        <p onClick={onClick} className="text-[#2563EB] cursor-pointer">
          Log in
        </p>
      </div>
    </div>
  );
};

export default Step1;
