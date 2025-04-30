"use client";

import { CategoryButtons } from "@/app/components/CategoryButtons";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const MenuContainer = () => {
  return (
    <div className="flex flex-col  w-full gap-9">
      <h1 className="font-[600] text-[30px] text-white">Categories</h1>
      <Carousel className="flex w-full">
        <CarouselContent className="w-fit gap-2 flex pl-4 overflow-scroll">
          <CategoryButtons />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MenuContainer;
