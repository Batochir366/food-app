"use client";
import MenuContainer from "./components/MenuContainer";
import { FoodCategor } from "./components/FoodCategor";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { FoodCategoryById } from "./components/FoodCategoryById";

export default function Home() {
  const [dataCat, setDataCat] = useState([]);

  const FetchMenuData = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/category`
    );
    setDataCat(res.data.category);
  };
  useEffect(() => {
    FetchMenuData();
  }, []);
  const searchParams = useSearchParams();
  let idp = searchParams.get("categoryId") || "";
  return (
    <div className="bg-[#404040] h-fit">
      <img
        className="w-screen h-[668px]"
        src="https://s3-alpha-sig.figma.com/img/8984/6312/a2a7c22f5fe9122b2bd6276cdd549c3e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZT8ix8PnvS5PNCzC9Xqfe8g8T2DgO7M5SL~Xr0wI2LjCQqEDVh0ErkR4plCjukQZu4NWzuG3uAlO3IiW~xj2TXJzkTt1hAsTXfb9fM~kZzBq1ovNXX-oiElqqZiRHq2iIuq3o1xOTwmqXwtHN-rGlsh0xYvc6POiPqbmE2FFeRw0zMovo8AeroEmkEa-HRDjTUURjnZtd-cbGpkL-fnOqf1pNGbT2Hk2iepnd9Qfu~uFj7-0PiEL-bgc7yLhrRHOgNH0UFIwABTkhSqyQrPmB9nrvjtByLDhc725MYKkRofHdYQAIhYPwIwuB4oCQwHbbZ8VAw2hyJl5AXZbdjAJiA__"
        alt="hero image"
      />
      <div className="flex py-8 px-[88px] flex-col">
        <MenuContainer />
        <div className="flex flex-col">
          {idp ? (
            <FoodCategoryById />
          ) : (
            <>
              {dataCat.map((value: any, index) => (
                <FoodCategor key={index} id={value._id} name={value.Name} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
