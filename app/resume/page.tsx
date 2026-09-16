import type { Metadata } from "next";
import ResumeViewer from "@/Components/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume",
};

const page = (): React.ReactElement => {
  return (
    <ResumeViewer />
  );
};

export default page;
