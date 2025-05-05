import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import { Separator } from "./Separator";

export const OrderedFood = ({
  image,
  FoodName,
  ingredients,
  totalQuantity,
  totalPrice,
  increase,
  dicrease,
}: {
  image: string;
  FoodName: string;
  ingredients: string;
  totalQuantity: number;
  totalPrice: string | null;
  increase: () => void;
  dicrease: () => void;
}) => {
  return (
    <>
      <div className="flex gap-[10px] ">
        <img
          className="w-[124px] h-[120px] rounded-[20px]"
          src={image}
          alt="poster"
        />
        <div className="flex flex-col w-fit justify-between">
          <div className="flex flex-col gap-3 w-[377px]">
            <h1 className="text-[#EF4444] font-[700] text-[16px]">
              {FoodName}
            </h1>
            <p className="w-full text-[12px]">{ingredients}</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex gap-3 justify-center items-center">
                <Button
                  onClick={dicrease}
                  className={`${
                    totalQuantity == 1 ? "opacity-80" : null
                  } bg-white`}
                >
                  <Minus className="text-black" />
                </Button>
                <p>{totalQuantity}</p>
                <Button onClick={increase} className="bg-white">
                  <Plus className="text-black" />
                </Button>
              </div>
              <p className="font-[600] text-[16px] text-black">{`${totalPrice} ₮`}</p>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};
