import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Minus, Pen, Plus } from "lucide-react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { toast, Toaster } from "sonner";
export const CategoryByIdAdmin = () => {
  const [data, setData] = useState([]);
  const searchParams = useSearchParams();

  let idp = searchParams.get("categoryId") || "";
  let name = searchParams.get("catname") || "";

  const fetchFoodData = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/food/${idp}`
    );
    setData(response.data.Food);
  };
  useEffect(() => {
    fetchFoodData();
  }, [searchParams]);

  const handlePostData = async () => {
    await axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URI}/food`, inputValue)
      .then((response) => {
        fetchFoodData();
        toast.custom((t) => (
          <div
            className={`w-[400px] p-4 rounded-xl shadow-lg bg-[#18181b] text-white flex items-center gap-4 transition-all`}
          >
            <Check className="size-4 text-white" />
            <p className="text-[16px] font-medium text-[#FAFAFA] ">
              New dish is being added to the menu
            </p>
          </div>
        ));
      })
      .catch((error) => {
        console.error(error.response?.data?.message || error.message);
      });
  };

  const [inputValue, setInputValue] = useState({
    category: idp,
  });

  const HandleInputValue = (event: any) => {
    const { name, value } = event.target;
    setInputValue((prevForm) => ({
      ...prevForm,
      [name]: value[0]?.toUpperCase() + value?.substring(1),
    }));
  };

  return (
    <div className="flex flex-col">
      <Toaster position="top-center" />
      <div className="flex p-5 bg-white rounded-[12px] flex-col w-fit">
        <h1 className="font-[600] text-[30px] text-black">
          {name} ({data?.length})
        </h1>
        <div className="flex gap-5 pt-4 flex-wrap">
          <Dialog>
            <div className="flex size-fit border border-[#ef4444] border-dashed rounded-[20px] px-29 py-35.5">
              <div className="flex flex-col gap-6 items-center">
                <DialogTrigger className="flex size-fit p-1 bg-[#EF4444] rounded-full active:bg-white">
                  <Plus className="text-white active:text-[#ef4444] stroke-1" />
                </DialogTrigger>
                <p className="text-[14px] font-[500]">Add new dish to {name}</p>
              </div>
            </div>
            <DialogContent className="flex flex-col gap-6">
              <DialogTitle>Add new Dish to {name}</DialogTitle>
              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] font-[500]"> Food name</p>
                  <Input
                    onChange={HandleInputValue}
                    name="foodName"
                    placeholder="Type food name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] font-[500]"> Food price</p>
                  <Input
                    onChange={HandleInputValue}
                    name="price"
                    type="number"
                    placeholder="Enter price..."
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-[500]">Ingredients</p>
                <Input
                  onChange={HandleInputValue}
                  name="ingredients"
                  placeholder="List ingredients..."
                  className="w-full pb-15 pt-4 flex"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-[500]">Food Image link</p>
                <Input
                  onChange={HandleInputValue}
                  name="image"
                  placeholder="image address..."
                  className="w-full flex"
                />
              </div>
              <DialogClose asChild>
                <Button onClick={() => handlePostData()}>Add Dish</Button>
              </DialogClose>
            </DialogContent>
          </Dialog>
          {data?.map((value: any, index) => (
            <Dialog key={index}>
              <div className="size-fit border border-[#E4E4E7] rounded-[20px] relative">
                <Button className="absolute mt-[170px] ml-[320px] flex z-10 bg-white rounded-full">
                  <Pen className="text-[#EF4444] stroke-3 size-4" />
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
    </div>
  );
};
