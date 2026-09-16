export const RESUME_SDE_URL = "https://cdn.jsdelivr.net/gh/ArNAB-0053/portfolio-content/PDF/Arnab_Bhattacharyya_SDE_Resume.pdf";
export const RESUME_AI_URL = "https://cdn.jsdelivr.net/gh/ArNAB-0053/portfolio-content/PDF/Arnab_Bhattacharyya_AIML_Resume.pdf";

export type ResumeType = "AI/ML" | "SDE"

export const resumeTabs: { key: ResumeType; label: string }[] = [
  { key: "AI/ML", label: "ai-ml.pdf" },
  { key: "SDE", label: "sde.pdf" },
]

export type ResumeConfig = { 
  url: string; 
  blurb: string; 
  filename: string 
}

export const resumeConfig: Record<ResumeType, ResumeConfig> = {
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

export const RESUME_TEXTS = {
  DESCRIPTION: "I currently work in full-stack engineering, but my degree and personal projects sit squarely in AI/ML — two resumes, one background.",
  MY_NOTE: "My day-to-day for the past year has been full-stack engineering — REST APIs, production UI, and data workflows in TypeScript, Node.js, and React/Next.js. But my degree was specifically in AI & ML, and outside of work I've built complete, evaluated ML projects: a legal-clause classifier trained on a labeled dataset, a RAG pipeline for querying PDFs, and a CNN for plant-disease detection. I'm open to entry-level AI/ML roles, where my coursework and project depth apply directly, and SDE roles at the 1 YOE level, where my production experience speaks for itself."
}