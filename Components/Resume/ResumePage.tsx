"use client"

import { useState } from "react"
import { dm_sans } from "@/utils/fonts"
import ResumeViewer from "./ResumeViewer"
import ResumeTabs from "./ResumeTabs"
import PageHeader from "../UI/PageHeader"
import { resumeConfig, resumeTabs, type ResumeType } from "@/utils/resumeConfig"
import { DownloadIcon, ExternalLinkIcon } from "../Icons"

const ResumePage = () => {
  const [resumeType, setResumeType] = useState<ResumeType>("SDE")
  const active = resumeConfig[resumeType]

  return (
    <div className={`relative w-full overflow-x-clip text-white ${dm_sans.className}`}>
      <div className="relative z-10">
        <PageHeader
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Resume" },
          ]}
        />

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl gap-12 flex max-md:flex-col lg:gap-16">
            {/* ─────────────────────────────────────────
                LEFT — heading, description, note
            ───────────────────────────────────────── */}
            <div className="flex-1 lg:self-start">
              <span className="font-mono text-xs text-white/30">~/resume</span>

              <h1 className="mt-3 text-6xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl">
                Resume
              </h1>

              <p className="mt-6 max-w-md text-base leading-6 text-white/45 sm:text-lg">
                I currently work full-stack, but my degree and personal projects sit
                squarely in AI/ML — two resumes, one background.
              </p>

              <div className="mt-8 border-l-2 border-cyan-400/30 pl-5">
                <p className="max-w-md text-sm leading-6 text-white/50">
                  My day-to-day for the past year has been full-stack engineering —
                  REST APIs, production UI, and data workflows in TypeScript, Node.js,
                  and React/Next.js. But my degree was specifically in AI &amp; ML, and
                  outside of work I&apos;ve built complete, evaluated ML projects: a
                  legal-clause classifier trained on a labeled dataset, a RAG pipeline
                  for querying PDFs, and a CNN for plant-disease detection. I&apos;m
                  open to entry-level AI/ML roles, where my coursework and project
                  depth apply directly, and SDE roles at the 1 YOE level, where my
                  production experience speaks for itself.
                </p>
              </div>
            </div>

            {/* ─────────────────────────────────────────
                RIGHT — document panel
            ───────────────────────────────────────── */}
            <div className="w-full md:w-[60%]">
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015] shadow-2xl shadow-black/30">
                <div className="flex items-center justify-between border-b border-white/[0.08] pr-2">
                  <ResumeTabs tabs={resumeTabs} activeTab={resumeType} onChange={setResumeType} />

                  <div className="flex items-center gap-1">
                    <a
                      href={active.url}
                      download={active.filename}
                      title="Download PDF"
                      className="rounded-md p-2 text-white/40 transition-colors hover:bg-white/[0.06] hover:text-white"
                    >
                      <DownloadIcon />
                    </a>
                    <a
                      href={active.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open raw PDF"
                      className="rounded-md p-2 text-white/40 transition-colors hover:bg-white/[0.06] hover:text-white"
                    >
                      <ExternalLinkIcon />
                    </a>
                  </div>
                </div>

                {/* <AnimatePresence mode="wait">
                  <motion.p
                    key={resumeType}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="border-b border-white/[0.06] px-5 py-3 text-xs text-white/35"
                  >
                    {active.blurb}
                  </motion.p>
                </AnimatePresence> */}

                <div className="p-4 sm:p-6">
                  <ResumeViewer url={active.url} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ResumePage