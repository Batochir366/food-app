"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ButtonG from "./ButtonG";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
type dataType = {
  Name: string;
  _id: string;
};
const MenuContainer = () => {
  const [data, setData] = useState<dataType[]>();
  const searchParams = useSearchParams();
  const id = searchParams.get("categoryId");

  const FetchMenuData = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/category`
    );
    setData(res.data.category);
  };
  useEffect(() => {
    FetchMenuData();
  }, []);

  const router = useRouter();
  const handleId = (_id: string, Name: string) => {
    {
      id == _id
        ? router.push("/")
        : router.push(`?categoryId=${_id}&catname=${Name}`);
    }
  };

  return (
    <div className="flex flex-col  w-full gap-9">
      <h1 className="font-[600] text-[30px] text-white">Categories</h1>
      <Carousel className="flex w-full">
        <CarouselContent className="w-fit gap-2 flex pl-4 overflow-scroll">
          {data?.map((value: dataType, index: number) => (
            <button
              key={index}
              onClick={() => {
                handleId(value._id, value.Name);
              }}
              className={`${
                value._id === id
                  ? "bg-[#EF4444] text-white"
                  : "bg-white text-black"
              } rounded-full min-w-fit py-2 px-3 h-9 flex justify-center items-center`}
            >
              {value.Name}
            </button>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MenuContainer;
