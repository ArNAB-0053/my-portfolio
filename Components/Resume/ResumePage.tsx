"use client"

import { useState } from "react"
import { dm_sans } from "@/utils/fonts"
import ResumeTabs from "./ResumeTabs"
import PageHeader from "../UI/PageHeader"
import { RESUME_TEXTS, resumeConfig, resumeTabs, type ResumeType } from "@/utils/resumeConfig"
import { DownloadIcon, ExternalLinkIcon } from "../Icons"
import { ResumeViewer } from "."
import { downloadResume } from "@/services/resume.service"

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
            <div className="flex-1 md:sticky md:top-24 md:self-start">
              <span className="font-mono text-xs text-white/30">~/resume</span>

              <h1 className="mt-3 text-6xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl">
                Resume
              </h1>

              <p className="mt-6 max-w-md text-base text-white/45 ">
                {RESUME_TEXTS.DESCRIPTION}
              </p>

              <div className="mt-8 border-l-2 border-cyan-400/30 pl-5">
                <p className="max-w-md text-[13px] leading-5 md:text-sm lg:leading-6 text-white/50">
                  {RESUME_TEXTS.MY_NOTE}
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
                    <button
                      onClick={downloadResume.bind(null, active)}
                      title="Download PDF"
                      className="rounded-md p-2 text-white/40 transition-colors hover:bg-white/[0.06] hover:text-white"
                    >
                      <DownloadIcon />
                    </button>
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