"use client"

import { useEffect, useRef, useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface ResumeViewerProps {
  url: string
}

const ResumeViewer = ({ url }: ResumeViewerProps) => {
  const [numPages, setNumPages] = useState(0)
  const [pageWidth, setPageWidth] = useState(800)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new ResizeObserver(([entry]) => {
      setPageWidth(Math.min(entry.contentRect.width, 900))
    })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="w-full rounded-lg overflow-hidden">
      <Document
        key={url}
        file={url}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={
          <div className="flex h-[500px] w-full items-center justify-center text-sm text-white/40">
            Loading resume…
          </div>
        }
        error={
          <div className="flex h-[300px] w-full items-center justify-center text-sm text-red-400/80">
            Couldn&apos;t load resume.
          </div>
        }
      >
        {Array.from({ length: numPages }, (_, i) => (
          <div key={i} className={i > 0 ? "mt-8 border-t border-white/[0.06] pt-8" : ""}>
            <Page
              pageNumber={i + 1}
              width={pageWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="[&>canvas]:!w-full [&>canvas]:!h-auto [&>canvas]:rounded-lg"
            />
          </div>
        ))}
      </Document>
    </div>
  )
}

export default ResumeViewer