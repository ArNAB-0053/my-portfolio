import type { Metadata } from "next";
import ResumePage from "@/Components/Resume/ResumePage";

export const metadata: Metadata = {
  title: "Resume",
};

const page = (): React.ReactElement => {
  return (
    <div className="w-full min-h-screen">
      <ResumePage />
    </div>
  );
};

export default page;
