"use client";
import React, { ChangeEvent, useState } from "react";
import { uploadImage } from "../utils/Image";

export const ImageUp = () => {
  const [file, setFile] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };
  console.log(file);
  const HandleImage = async (file?: File) => {
    if (!file) {
      console.log("File oruulagu");

      return;
    }
    const imageURL = await uploadImage(file);
    setPreview(imageURL);
  };
  return (
    <div className="flex flex-col gap-3">
      <input
        onChange={handleFile}
        className="border-black border border-solid w-[200px]"
        type="file"
      />
      <button
        onClick={() => HandleImage(file)}
        className="flex bg-red-700 p-2 w-[100px] border-black"
      >
        upload
      </button>
      <img className="size-20" src={preview} alt="" />
    </div>
  );
};
