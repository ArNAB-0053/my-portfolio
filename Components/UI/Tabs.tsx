"use client"

import { motion } from "framer-motion"
import { dm_sans } from "@/utils/fonts"

interface TabsProps<T extends string> {
  tabs: readonly T[]
  activeTab: T
  onChange: (tab: T) => void
  /** unique id per tab group so multiple tab bars on one page don't share the sliding indicator */
  layoutId: string
  className?: string
}

const Tabs = <T extends string>({
  tabs,
  activeTab,
  onChange,
  layoutId,
  className = "",
}: TabsProps<T>): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`max-md:w-full flex flex-wrap justify-center sm:justify-start mb-4 ml-4 sm:ml-6 md:ml-8 ${dm_sans.className} ${className}`}
    >
      <motion.div
        className="max-md:w-full grid gap-2 p-1 bg-black/20 backdrop-blur-sm rounded-lg border border-gray-800 shadow-lg"
        style={{ gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
      >
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => onChange(tab)}
            className={`relative min-w-[100px] px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 
              ${activeTab === tab
                ? "text-white bg-gray-800/40"
                : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/30"
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId={layoutId}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="absolute inset-0 rounded-md bg-gradient-to-b from-gray-800/50 to-gray-900/60 -z-10 shadow-inner"
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Tabs