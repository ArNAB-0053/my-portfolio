"use client"
import { RESUME_URL } from "@/utils/constants";

const ResumeViewer = () => {
    return (
        <div className="h-screen overflow-hidden">
            <iframe
                src={RESUME_URL}
                title="Resume PDF"
                className="w-full h-full border-none"
            />
        </div>
    )
}

export default ResumeViewer
