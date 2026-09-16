import type { ProjectTab as ProjectTabName } from "@/types";
import Tabs from "../UI/Tabs";

interface ProjectTabProps {
  tabs: readonly ProjectTabName[];
  activeTab: ProjectTabName;
  setActiveTab: (tab: ProjectTabName) => void;
  isMobile?: boolean;
}

const ProjectTab = ({ tabs, activeTab, setActiveTab }: ProjectTabProps): JSX.Element => (
  <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} layoutId="project-tab-indicator" />
)

export default ProjectTab;
