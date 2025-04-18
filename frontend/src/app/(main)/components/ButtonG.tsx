import React, { useState } from "react";

const ButtonG = ({
  value,
  onClick,
}: {
  value: string;
  onClick: () => void;
}) => {
  const [isClicked, setIsClicked] = useState(true);
  const HandleOnClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <button
      onClick={() => {
        onClick();
        HandleOnClick();
      }}
      className={`${
        isClicked ? "bg-white text-black" : "bg-[#EF4444] text-white"
      } rounded-full min-w-fit py-2 px-3 h-9 flex justify-center items-center`}
    >
      {value}
    </button>
  );
};

export default ButtonG;
