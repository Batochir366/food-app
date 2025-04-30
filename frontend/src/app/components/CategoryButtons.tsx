"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
type dataType = {
  Name: string;
  _id: string;
};
import React, { useEffect, useState } from "react";
import axios from "axios";

export const CategoryButtons = () => {
  const [data, setData] = useState<dataType[]>();
  const searchParams = useSearchParams();
  const id = searchParams.get("categoryId");
  const pathname = usePathname();
  const isAdmin = pathname.includes("admin");
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
        ? isAdmin
          ? router.push("/admin")
          : router.push("/")
        : router.push(`?categoryId=${_id}&catname=${Name}`);
    }
  };
  return (
    <>
      {data?.map((value: dataType, index: number) => (
        <button
          key={index}
          onClick={() => {
            handleId(value._id, value.Name);
          }}
          className={`${
            value._id === id ? "bg-[#EF4444] text-white" : "bg-white text-black"
          } rounded-full min-w-fit py-2 px-3 h-9 flex justify-center items-center  border-[#E4E4E7] border-1`}
        >
          {value.Name}
        </button>
      ))}
    </>
  );
};
