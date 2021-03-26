import React from "react"
import { useProjectsPreviewQuery } from "../../hooks/useProjectsQuery"
import { ProjectPreviewType } from "../../models/Project.model"
import ProjectPreview from "./project-preview/ProjectPreview"

import "./Projects.scss"

const ProjectsSection: React.FC = () => {
  const { projects } = useProjectsPreviewQuery()

  return (
    <div className="projects-section">
      <h1 className="header-margin">/projects</h1>
      <div className="projects-section__grid">
        {projects.map((project: ProjectPreviewType, index: number) => {
          return (
            <ProjectPreview
              key={project.id}
              index={index}
              name={project.title}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectsSection
