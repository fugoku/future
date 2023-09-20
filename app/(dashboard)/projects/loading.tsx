import { DashboardHeader } from "@/components/header"
import { ProjectCreateButton } from "@/components/project-create-button"
import { ProjectItem } from "@/components/project-item"
import { DashboardShell } from "@/components/shell"

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Projects" text="Create and manage projects.">
        <ProjectCreateButton />
      </DashboardHeader>
      <div className="divide-border-200 divide-y rounded-md border">
        <ProjectItem.Skeleton />
        <ProjectItem.Skeleton />
        <ProjectItem.Skeleton />
        <ProjectItem.Skeleton />
        <ProjectItem.Skeleton />
      </div>
    </DashboardShell>
  )
}
