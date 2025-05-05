"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import * as Yup from "yup";

export const Step1sign = ({ onClick }: { onClick: () => void }) => {
  const [errors, setErrors] = useState("");

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "password too short")
      .required("password is required"),
  });

  const [formValues, setFormValues] = useState({});

  const HandleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async () => {
    try {
      await schema.validate({ formValues });
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/user`,
        {
          email: formValues,
          password: "password",
          phoneNumber: "99009900",
          address: "egg",
          isVerified: false,
        }
      );
      setErrors("");
      console.log(errors, "errrsdf");
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        setErrors(error.message);
      } else {
        setErrors(error.response?.data.message);
      }
      console.log(errors, "errors");
    }
  };
  return (
    <>
      <div>
        <h1 className="text-[24px] font-[600]">Create your account</h1>
        <p className="text-[16px] text-[#71717A]">
          sign up to enjoy your favorite dishes.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Input
          onChange={HandleOnChange}
          name="email"
          className=" focus-visible:outline-none"
          placeholder="Enter your email address"
        />
        <p className="text-[14px] text-[#EF4444]">{errors}</p>
      </div>
      <Button
        onClick={() => handleSubmit()}
        className="w-[416px] h-[36px] bg-black text-white rounded-md"
      >
        Let`s go
      </Button>
      <div className="flex w-full justify-center gap-3">
        <p className="text-[#71717A]">Already have an account?</p>
        <p className="text-[#2563EB] cursor-pointer">Log in</p>
      </div>
    </>
  );
};
