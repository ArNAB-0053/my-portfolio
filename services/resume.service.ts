import { ResumeConfig } from "@/utils/resumeConfig"

/**
 * Downloads the resume by fetching the PDF from its URL and
 * creating a temporary Blob URL so the browser treats it as a file download.
 *
 * @param active - Configuration of the resume to download.
 */
export const downloadResume = async (active: ResumeConfig) => {
    const response = await fetch(active.url)
    const blob = await response.blob()

    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = active.filename
    link.click()

    URL.revokeObjectURL(url)
}