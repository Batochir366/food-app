import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";

const Step2 = () => {
  return (
    <div className="w-[416px] h-fit gap-6 flex flex-col">
      <Button variant="outline" size="icon">
        <ChevronLeft />
      </Button>
      <div>
        <h1 className="text-[24px] font-[600]">Please verify Your Email</h1>
        <div className="flex">
          <p className="text-[16px] text-[#71717A]">
            We just sent an email to
            <a
              className="text-black text-[16px] underline"
              target="_blank"
              href="https://www.google.com"
            >
              {` ${"link"}`}
            </a>
            . Click the link in the email to verify your account.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          className="focus-visible:outline-none"
          placeholder="example@gmail.com"
        />
      </div>
      <Button className="w-[416px] h-[36px] bg-black text-white rounded-md">
        Resend email
      </Button>
    </div>
  );
};

export default Step2;
