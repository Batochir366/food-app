import { Button } from "@/components/ui/button";

export const Step2 = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
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
      <Button
        onClick={onClick}
        className="w-[416px] h-[36px] bg-black text-white rounded-md"
      >
        Resend email
      </Button>
    </>
  );
};


