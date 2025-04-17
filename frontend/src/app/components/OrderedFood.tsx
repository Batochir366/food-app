import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React from "react";
import { Separator } from "./Separator";

export const OrderedFood = () => {
  return (
    <div className="flex flex-col p-4 bg-white gap-6 rounded-[20px]  w-fit text-start">
      <h1 className="text-[20px] font-semibold">My Cart</h1>
      <div className="flex gap-[10px]">
        <img
          className="w-[124px] h-[120px] rounded-[20px]"
          src={
            "https://s3-alpha-sig.figma.com/img/34c3/688e/73a7fec1f66f9edc2b2a97c609da743f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YBtZL4H4jr1LKgFa2g-3XmBDHhV7Wvu5tKUKiKBzscvjixU6FTcjmyKXAlPa92Sngrk6KjiE86WOyU~Ugss9TTY8N1-f1GF4K8QBX9s90dnC5DpAEp01ztZnsf2G0lbjUIPzfA2U9qR8NeuZ4LxMCI0hsUs3C6eDBv9~p2tZn2iX-ks2M1JaseNcqfyG6ONiERN5nprBVzIxgpbnf1PZM-65kmA8liAanegi8jO8NYURVKVmkDMB0ZcD1Coe9a9ghfM9bavjXlZQmb9XiEBb~ENpjd7VpDKvvxa~u681Fpqxly8pa4BV9RjnLjroBS-L5WEsqt0U-SLbW-v4SxN3iA__"
          }
          alt="poster"
        />
        <div className="flex flex-col w-fit justify-between">
          <div className="flex flex-col gap-3 w-[377px]">
            <h1 className="text-[#EF4444] font-[700] text-[16px]">
              {"Sunshine Stackers "}
            </h1>
            <p className="w-full text-[12px]">
              {
                "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar."
              }
            </p>
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
              <p className="font-[600] text-[16px] text-black">{`${"13000"} ₮`}</p>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
};
