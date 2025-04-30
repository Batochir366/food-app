"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Minus, Pen, Plus, Trash, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { toast, Toaster } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type DataType = {
  _id: string;
  Name: string;
  image: string;
  price: number;
  ingredients: string;
  foodName: string;
};
export const CategoryAdmin = ({ id, name }: { id: string; name: string }) => {
  const [data, setData] = useState<DataType[]>();
  const [dataCat, setDataCat] = useState<any>([]);

  //fetch hiij bn 2 data g
  const fetchFoodData = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/food/${id}`
    );
    setData(response.data.Food);
  };

  const FetchMenuData = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/category`
    );
    setDataCat(res.data.category);
  };
  //end

  useEffect(() => {
    fetchFoodData();
    FetchMenuData();
  }, []);

  //zurgiig upload hiih ued preview buyu ymar zurag oruulsan aa harj bolno not work

  // const [preview, setPreview] = useState<string | null>(null);
  // const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];

  //   if (file && file.type.startsWith("image/")) {
  //     const previewUrl = URL.createObjectURL(file);
  //     setPreview(previewUrl);
  //   } else {
  //     setPreview(null);
  //   }
  // };

  // const handleImageRemove = () => {
  //   setPreview(null);
  //   console.log(preview);
  // };

  //end

  //post huselt hiij baigaa √

  const [inputValue, setInputValue] = useState({
    //ehni utgaar id -g page iin dawtaltaas awj baiga
    category: id,
  });

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
  //inputiig n setelj awj bn
  const HandleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue((prevForm) => ({
      ...prevForm,
      [name]: value[0]?.toUpperCase() + value?.substring(1),
    }));
  };
  // post huselt duusj bn
  const [updateData, setUpdateData] = useState({});

  console.log(updateData, "kk");
  console.log(data, "data");

  const HandleUpdateDataInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdateData((prevForm) => ({
      ...prevForm,
      [name]: value[0]?.toUpperCase() + value?.substring(1),
    }));
  };
  const HandleUpdatedata = async (id: string) => {
    console.log(updateData, "date");
    try {
      await axios
        .put(`${process.env.NEXT_PUBLIC_BACKEND_URI}/food/${id}`)
        .then((response) => {
          fetchFoodData();
          toast.custom((c) => <p>gg</p>);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex pt-4 flex-col">
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
              {/* <div className="flex flex-col gap-2">
                <p className="text-[14px] font-[500]">Food Image</p>
                <div className="flex flex-col gap-2 relative">
                  <input
                    onChange={handleImageChange}
                    accept="image/*"
                    type="file"
                    className="w-full h-[138px] pb-15 pt-4 flex border  border-dashed border-[#2563fd2b] rounded-[12px] text-transparent "
                  />
                  <div
                    className={`${
                      preview ? "flex" : "hidden"
                    } w-full h-[138px] absolute`}
                  >
                    <img
                      className="w-full h-full text-transparent rounded-[12px] border-3 border-[#2563fd2b]"
                      src={preview!}
                      alt="Selected"
                    />
                    <Button
                      onClick={handleImageRemove}
                      className="absolute z-10 top-4 right-4 bg-white rounded-full"
                    >
                      <X className="text-black" />
                    </Button>
                  </div>
                </div>
              </div> */}
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
          {data?.map((value, index) => (
            <Dialog key={index}>
              <div className="size-fit border border-[#E4E4E7] rounded-[20px] relative">
                <DialogTrigger className="absolute mt-[170px] ml-[320px] flex z-10 bg-white rounded-full size-fit p-3">
                  <Pen className="text-[#EF4444] stroke-3 size-4" />
                </DialogTrigger>
                <div className="flex flex-col px-4 py-4 bg-white gap-6 rounded-[20px]  w-fit text-start">
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
                </div>
              </div>
              <DialogContent className="flex p-4 bg-white gap-6 rounded-[20px] flex-col w-fit text-start">
                <DialogTitle>Dish info</DialogTitle>
                <div className="flex gap-4">
                  <p className="text-[12px] text-nowrap w-[150px] font-[500]">
                    Dish name
                  </p>
                  <Input
                    onChange={HandleUpdateDataInput}
                    name="updateDishName"
                    defaultValue={value.foodName}
                  />
                </div>
                <div className="flex gap-4">
                  <p className="text-[12px] text-nowrap w-[97.24px] font-[500]">
                    Dish category
                  </p>
                  <Select
                    onValueChange={(value) =>
                      setUpdateData((prev) => ({ ...prev, category: value }))
                    }
                    defaultValue={dataCat[0]?._id ?? ""}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {dataCat?.map((value, index) => (
                        <SelectItem key={index} value={value._id}>
                          {value.Name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-4">
                  <p className="text-[12px] w-[150px] font-[500]">
                    Ingredients
                  </p>
                  <Input
                    placeholder="asd"
                    onChange={HandleUpdateDataInput}
                    name="updateIngredients"
                    defaultValue={value.ingredients}
                    className="w-full pb-15 pt-4 flex"
                  />
                </div>
                <div className="flex  gap-4">
                  <p className="text-[12px] text-nowrap w-[150px] font-[500]">
                    Food Image link
                  </p>
                  <Input
                    onChange={HandleUpdateDataInput}
                    name="updateImage"
                    defaultValue={value.image}
                    className="w-full flex"
                  />
                </div>
                <DialogClose asChild>
                  <div className="flex items-center justify-between">
                    <Button>
                      <Trash className="text-[#EF4444]" />
                    </Button>
                    <Button onClick={() => HandleUpdatedata(value._id)}>
                      Save changes
                    </Button>
                  </div>
                </DialogClose>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};
