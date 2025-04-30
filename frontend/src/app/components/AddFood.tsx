import React, { ChangeEvent, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";
import { uploadImage } from "../utils/Image";

export const AddFood = ({
  fetchFoodData,
  categoryId,
  name,
}: {
  fetchFoodData: () => void;
  categoryId: string;
  name: string;
}) => {
  const [preview, setPreview] = useState<string>();
  const [file, setFile] = useState<File | null>(null);
  const [inputValue, setInputValue] = useState({
    category: categoryId,
  });

  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
    if (!file) {
      console.log("File oruulagu");
      return;
    }
  };
  const empty = () => {
    setPreview("");
    setFile(null);
  };

  console.log(inputValue, "value");
  const HandleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue((prevForm) => ({
      ...prevForm,
      [name]: value[0]?.toUpperCase() + value?.substring(1),
    }));
  };

  const handlePostData = async () => {
    const imageURL = await uploadImage(file as File);
    await axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URI}/food`, {
        ...inputValue,
        image: imageURL,
      })
      .then((response) => {
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
        fetchFoodData();
      })
      .catch((error) => {
        console.error(error.response?.data?.message || error.message);
      });
  };
  console.log(inputValue, "inputvlaue");

  return (
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
          <p className="text-[14px] font-[500]">Food Image</p>
          <div className="flex flex-col gap-2 relative">
            <input
              onChange={handleFile}
              type="file"
              className="w-full h-[350px] pb-15 pt-4 flex border  border-dashed border-[#2563fd2b] rounded-[12px] text-transparent "
            />
            <div
              className={`${
                preview ? "flex" : "hidden"
              } w-full h-[350px] absolute`}
            >
              {preview && (
                <img
                  src={preview}
                  className="w-full h-full text-transparent rounded-[12px] border-3 border-[#2563fd2b]"
                  alt="Selected"
                />
              )}

              <Button
                onClick={() => empty()}
                className="absolute z-10 top-4 right-4 bg-white rounded-full"
              >
                <X className="text-black" />
              </Button>
            </div>
          </div>
        </div>
        <DialogClose asChild>
          <Button onClick={() => handlePostData()}>Add Dish</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
