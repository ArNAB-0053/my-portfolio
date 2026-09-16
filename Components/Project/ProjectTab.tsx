import type { ProjectTab as ProjectTabName } from "@/types";
import Tabs, { Tab } from "../UI/Tabs";

interface ProjectTabProps<T extends string> {
  tabs: readonly Tab<T>[]
  activeTab: T
  setActiveTab: (tab: T) => void
}

const ProjectTab = ({ tabs, activeTab, setActiveTab }: ProjectTabProps<ProjectTabName>): JSX.Element => (
  <Tabs
    tabs={tabs}
    activeTab={activeTab}
    onChange={setActiveTab}
    layoutId="project-tab-indicator"
  />
)

export default ProjectTab;
