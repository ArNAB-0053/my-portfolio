import dynamic from "next/dynamic";
import SectionLoader from "../UI/SectionLoader";

export { default as ResumeTabs } from "./ResumeTabs";
export { default as ResumePage } from "./ResumePage";


/**
 * Dynamically loads the ResumeViewer component on the client.
 *
 * react-pdf relies heavily on client-side rendering, so loading it
 * normally can cause a brief white flash while the page is loading.
 * SSR is disabled and a loader is shown until the viewer is ready.
 */

// Dynamic import of ResumeViewer to disable SSR and show a loader while loading
// initialy, it was showing a white flash while page was loading because of react-pdf used in ResumeViewer as that uses client-side rendering heavily
// so added a loader to show while the component is being loaded
export const ResumeViewer = dynamic(
    () => import("./ResumeViewer"),
    {
        ssr: false,
        loading: () => (
            <div className="aspect-[8.5/11] w-full flex items-center justify-center rounded-lg bg-[#111]/40" >
              <SectionLoader text="Loading resume..." />
            </div>
        ),
    }
)