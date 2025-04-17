import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import ButtonG from "./ButtonG";

const MenuContainer = () => {
  const test = [
    "Appetizers",
    "Pizzas",
    "Salads",
    "Lunch favorites",
    "Main dishes",
    "Fish & Sea foods",
    "Side dish",
    "Brunch",
    "Desserts",
    "Appetizers",
    "Pizzas",
    "Salads",
    "Lunch favorites",
    "Main dishes",
    "Fish & Sea foods",
    "Side dish",
    "Brunch",
    "Desserts",
    "Appetizers",
    "Pizzas",
    "Salads",
    "Lunch favorites",
    "Main dishes",
    "Fish & Sea foods",
    "Side dish",
    "Brunch",
    "Desserts",
    "Appetizers",
    "Pizzas",
    "Salads",
    "Lunch favorites",
    "Main dishes",
    "Fish & Sea foods",
    "Side dish",
    "Brunch",
    "Desserts",
  ];

  return (
    <div className="flex flex-col  w-full gap-9">
      <h1 className="font-[600] text-[30px] text-white">Categories</h1>
      <Carousel className="flex w-full">
        <CarouselContent className="w-fit gap-2 flex pl-4 overflow-scroll">
          {test.map((value, index) => (
            <ButtonG key={index} value={value} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MenuContainer;
