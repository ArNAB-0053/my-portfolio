"use client"

import { motion } from "framer-motion"
import type { ResumeType } from "@/utils/resumeConfig"

interface ResumeFileTabsProps {
  tabs: { key: ResumeType; label: string }[]
  activeTab: ResumeType
  onChange: (tab: ResumeType) => void
}

const ResumeTabs = ({ tabs, activeTab, onChange }: ResumeFileTabsProps) => {
  return (
    <div className="flex font-mono text-[13px]">
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`relative px-4 py-3 transition-colors duration-200 ${
            activeTab === key ? "text-white" : "text-white/35 hover:text-white/60"
          }`}
        >
          {label}
          {activeTab === key && (
            <motion.div
              layoutId="resume-file-tab-underline"
              className="absolute inset-x-0 bottom-0 h-px bg-cyan-400"
              transition={{ type: "spring", damping: 22, stiffness: 300 }}
            />
          )}
        </button>
      ))}
    </div>
  )
}

export default ResumeTabs