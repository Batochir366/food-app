import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React from "react";
import { Separator } from "./Separator";

export const OrderedFood = ({
  image,
  FoodName,
  ingredients,
  price,
}: {
  image: string;
  FoodName: string;
  ingredients: string;
  price: string;
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
                <Button>
                  <Minus />
                </Button>
                <p>{"1"}</p>
                <Button>
                  <Plus />
                </Button>
              </div>
              <p className="font-[600] text-[16px] text-black">{`${price} ₮`}</p>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};
