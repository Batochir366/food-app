"use client";
import { useRouter } from "next/navigation";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";

export default function page() {
  const Steps = [Step1, Step2][0];
  const router = useRouter();
  const HandleChangePage = () => {
    router.push("/login");
  };
  return (
    <div className="w-[416px] h-fit gap-6 flex flex-col">
      <Steps onClick={() => HandleChangePage()} />
    </div>
  );
}
