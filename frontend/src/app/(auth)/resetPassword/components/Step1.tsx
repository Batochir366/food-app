import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Step1 = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <div>
        <h1 className="text-[24px] font-[600]">Reset your password</h1>
        <p className="text-[16px] text-[#71717A]">
          Enter your email to receive a password reset link.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          className="focus-visible:outline-none"
          placeholder="example@gmail.com"
        />
      </div>
      <Button
        onClick={onClick}
        className="w-[416px] h-[36px] bg-black text-white rounded-md"
      >
        Send link
      </Button>
      <div className="flex w-full justify-center gap-3">
        <p className="text-[#71717A]">Don’t have an account?</p>
        <p onClick={onClick} className="text-[#2563EB] cursor-pointer">
          Sign up
        </p>
      </div>
    </>
  );
};
