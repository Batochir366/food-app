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
};
const MenuContainer = () => {
  const [data, setData] = useState<dataType[]>();
  // cosnt[(activeMenu, set)] = useState(0);

  const FetchMenuData = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/category`
    );
    setData(res.data.category);
  };
  useEffect(() => {
    FetchMenuData();
  }, []);
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleId = (_id: string) => {
    const id = searchParams.get("categoryId");
    {
      id == _id ? router.push("/") : router.push(`?categoryId=${_id}`);
    }
  };
  console.log(data);
  return (
    <div className="flex flex-col  w-full gap-9">
      <h1 className="font-[600] text-[30px] text-white">Categories</h1>
      <Carousel className="flex w-full">
        <CarouselContent className="w-fit gap-2 flex pl-4 overflow-scroll">
          {data?.map((value: dataType, index: number) => (
            <ButtonG
              onClick={() => handleId(value._id, index)}
              key={index}
              value={value.Name}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MenuContainer;
