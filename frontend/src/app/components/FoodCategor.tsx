"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { AddFood } from "@/app/components/AddFood";

export const FoodCategor = () => {
  const pathname = usePathname();
  const isAdmin = pathname.includes("admin");
  const searchParams = useSearchParams();
  const id = searchParams.get("categoryId");
  const [data, setData] = useState<any>([]);
  const FetchFoodData = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/food/all?categoryId=${
        id ? id : ""
      }`
    );
    setData(response.data.Food);
  };

  useEffect(() => {
    FetchFoodData();
  }, [searchParams]);

  console.log(data, "food");

  const handleOnClick = (value: any) => {
    const card = JSON.parse(localStorage.getItem("foods")!);
    card
      ? localStorage.setItem("foods", JSON.stringify([...card, value]))
      : localStorage.setItem("foods", JSON.stringify([value]));
  };
  // useEffect(() => {

  // }, [cart]);

  return (
    <div className="flex flex-col">
      {data?.map((category) => (
        <div key={category._id} className="flex pt-[54px] flex-col w-full">
          <h1
            className={`font-[600] text-[30px] ${
              isAdmin ? "text-black" : "text-white"
            }`}
          >
            {category.Name}
          </h1>
          <div className="flex gap-5 pt-[54px] flex-wrap">
            {isAdmin && (
              <AddFood
                name={category.Name}
                categoryId={category._id}
                fetchFoodData={FetchFoodData}
              />
            )}
            {category.results.map((value, index) => (
              <Dialog key={index}>
                <div className="size-fit relative">
                  <Button
                    onClick={() => {
                      handleOnClick(value, index);
                    }}
                    className="absolute mt-[170px] ml-[320px] flex z-10 bg-white rounded-full"
                  >
                    <Plus className="text-[#EF4444] stroke-3 size-4" />
                  </Button>
                  <DialogTrigger className="flex flex-col px-4 py-4 bg-white gap-6 rounded-[20px]  w-fit text-start">
                    <img
                      className="w-[365px] h-[210px] rounded-[20px]"
                      src={value.image}
                      alt="poster"
                    />
                    <div className="flex flex-col w-fit justify-between">
                      <div className="flex flex-col gap-3 w-full">
                        <div className="flex w-full justify-between items-center">
                          <DialogTitle className="text-[#EF4444] font-[600] text-[24px]">
                            {value.foodName}
                          </DialogTitle>
                          <p className="font-[600] text-[16px] text-black">{`${value.price} ₮`}</p>
                        </div>
                        {value.ingredients?.length < 80 ||
                        value.ingredients === undefined ? (
                          <div className="h-[48px] w-[365px]">
                            {value.ingredients}
                          </div>
                        ) : (
                          <p className="w-[365px]">
                            {value.ingredients === undefined ||
                            value.ingredients?.length < 80
                              ? ""
                              : value.ingredients?.slice(0, 80) + "..."}
                          </p>
                        )}
                      </div>
                    </div>
                  </DialogTrigger>
                </div>
                <DialogContent className="flex p-4 bg-white gap-6 rounded-[20px]  w-fit text-start">
                  <img
                    className="w-[377px] h-[362px] rounded-[20px]"
                    src={value.image}
                    alt="poster"
                  />
                  <div className="flex flex-col w-fit justify-between">
                    <div className="flex flex-col gap-3 w-[377px]">
                      <DialogTitle className="text-[#EF4444] font-[600] text-[24px]">
                        {value.foodName}
                      </DialogTitle>
                      <p className="w-full">{value.ingredients}</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <p>Total prices</p>
                          <p className="font-[600] text-[16px] text-black">{`${value.price} ₮`}</p>
                        </div>
                        <div className="flex gap-3 justify-center items-center">
                          <Button>
                            <Minus />
                          </Button>
                          <p>{"1"}</p>
                          <Button>
                            <Plus />
                          </Button>
                        </div>
                        <Button>Add to Cart</Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
