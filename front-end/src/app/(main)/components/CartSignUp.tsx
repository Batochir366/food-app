"use client";
import { Input } from "@/components/ui/input";
import { ChevronRight, MapPin, ShoppingCart, User, X } from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CartSignUp = () => {
  const [isChecked, setIsChecked] = useState(true);
  const HandleOnClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex gap-3 w-fit h-fit">
      <div className="flex w-fit bg-white h-[36px] gap-1 rounded-full justify-center items-center px-3">
        <MapPin className="text-[#EF4444]" />
        {isChecked ? (
          <div className="flex items-center justify-center">
            <p className="text-[#EF4444]">Delivery address: </p>
            <button
              onClick={() => HandleOnClick()}
              className="flex gap-1 text-[#71717A]"
            >
              Add Location
              <ChevronRight className="text-[#71717A]" />
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <Input
              className="h-4 focus-visible:outline-none text-[12px] border-none"
              placeholder="Add Location"
            />
            <X
              onClick={() => HandleOnClick()}
              className="size-[20px] text-[#71717A]"
            />
          </div>
        )}
      </div>
      <button className="bg-white text-black rounded-full size-[36px] justify-center items-center flex relative">
        <ShoppingCart className="size-4" />
        <div className="size-[36px] left-[25.81px] bottom-1 absolute flex">
          <div className="absolute rounded-full flex  bg-[#EF4444] text-white text-[10px] size-5 justify-center items-center">
            {"1"}
          </div>
        </div>
      </button>
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-[#EF4444] text-white  rounded-full size-[36px] justify-center items-center flex">
          <User className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="size-fit gap-2 flex flex-col p-4 items-center">
          <DropdownMenuLabel>{"My Account"}</DropdownMenuLabel>
          <button className="flex size-fit py-2 px-3 bg-[#F4F4F5] rounded-full font-[500] hover:bg-[#18181B] hover:text-white">
            Sign out
          </button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CartSignUp;
