"use client";
import { Input } from "@/components/ui/input";
import {
  ChevronRight,
  MapPin,
  Minus,
  Plus,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DialogMenu,
  DialogContentMenu,
  DialogTitleMenu,
  DialogTriggerMenu,
} from "@/components/ui/dialogMenu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OrderedFood } from "@/app/components/OrderedFood";
import { OrderHistory } from "@/app/components/OrderHistory";

export const CartSignUp = () => {
  const [isChecked, setIsChecked] = useState(true);
  const HandleOnClick = () => {
    setIsChecked(!isChecked);
  };

  const foods = JSON.parse(localStorage.getItem("foods")!);

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
      <DialogMenu>
        <DialogTriggerMenu className="bg-white text-black rounded-full size-[36px] justify-center items-center flex relative">
          <ShoppingCart className="size-4" />
          <div className="size-[36px] left-[25.81px] bottom-1 absolute flex">
            <div className="absolute rounded-full flex  bg-[#EF4444] text-white text-[10px] size-5 justify-center items-center">
              {foods?.length}
            </div>
          </div>
        </DialogTriggerMenu>
        <DialogContentMenu className="bg-[#404040]">
          <DialogTitleMenu className="flex justify-center items-center gap-3 text-white text-[20px] font-semibold">
            <ShoppingCart className="text-white stroke-3 size-6" /> Order detail
          </DialogTitleMenu>
          <Tabs defaultValue="Cart" className="w-fit">
            <TabsList className="bg-white flex p-1 h-fit w-full rounded-full">
              <TabsTrigger
                className="w-[227px] h-[36px] flex justify-center items-center rounded-full"
                value="Cart"
              >
                Cart
              </TabsTrigger>
              <TabsTrigger
                className="w-[227px] h-[36px] flex justify-center items-center rounded-full"
                value="Order"
              >
                Order
              </TabsTrigger>
            </TabsList>
            <TabsContent
              className="flex flex-col p-4 bg-white gap-6 rounded-[20px] w-fit text-start"
              value="Cart"
            >
              <div className="overflow-scroll">
                <div className="flex flex-col p-4 bg-white gap-6 rounded-[20px] overflow-scroll size-fit text-start">
                  <h1 className="text-[20px] font-semibold">My Cart</h1>
                  {foods &&
                    foods?.map((value: any, index) => (
                      <OrderedFood
                        ingredients={value.ingredients}
                        FoodName={value.FoodName}
                        price={value.price}
                        image={value.image}
                      />
                    ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent
              className="flex flex-col p-4 bg-white gap-6 rounded-[20px]  w-fit text-start"
              value="Order"
            >
              <OrderHistory />
            </TabsContent>
          </Tabs>
        </DialogContentMenu>
      </DialogMenu>
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
