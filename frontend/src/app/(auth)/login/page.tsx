"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { ButtonLeft } from "../../components/ButtonLeft";

export default function page() {
  const router = useRouter();
  const HandleChangePage = () => {
    router.push("/signUp");
  };
  const HandleChangePageRP = () => {
    router.push("/resetPassword");
  };
  const directToHome = () => {
    router.push("/");
  };
  return (
    <div className="w-[416px] h-fit gap-6 flex flex-col">
      <ButtonLeft onClick={() => directToHome()} />
      <div>
        <h1 className="text-[24px] font-[600]">Log in</h1>
        <p className="text-[16px] text-[#71717A]">
          Log in to enjoy your favorite dishes.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          className="focus-visible:outline-none"
          placeholder="Enter your email address"
        />
        <Input className="focus-visible:outline-none" placeholder="Password" />
        <p
          onClick={() => HandleChangePageRP()}
          className="underline text-[#18181B] font-[14px] cursor-pointer"
        >
          Forgot password ?
        </p>
      </div>
      <Button
        onClick={directToHome}
        className="w-[416px] h-[36px] bg-black text-white rounded-md"
      >
        Let`s go
      </Button>
      <div className="flex w-full justify-center gap-3">
        <p className="text-[#71717A]">Don’t have an account?</p>
        <p
          onClick={() => HandleChangePage()}
          className="text-[#2563EB] cursor-pointer"
        >
          Sign up
        </p>
      </div>
    </div>
  );
}
