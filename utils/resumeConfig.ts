import { RESUME_SDE_URL, RESUME_AI_URL } from "@/utils/constants"

export type ResumeType = "AI/ML" | "SDE"

export const resumeTabs: { key: ResumeType; label: string }[] = [
  { key: "AI/ML", label: "ai-ml.pdf" },
  { key: "SDE", label: "sde.pdf" },
]

export const resumeConfig: Record<ResumeType, { url: string; blurb: string; filename: string }> = {
  "AI/ML": {
    url: RESUME_AI_URL,
    blurb: "Focused on ML pipelines, LangChain/RAG systems, and applied AI engineering.",
    filename: "Arnab_Bhattacharyya_AI_Resume.pdf",
  },
  SDE: {
    url: RESUME_SDE_URL,
    blurb: "Focused on full-stack systems, REST APIs, and scalable backend architecture.",
    filename: "Arnab_Bhattacharyya_SDE_Resume.pdf",
  },
}