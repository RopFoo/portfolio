import React from "react"
import ProjectPreview from "./project-preview/ProjectPreview"

import "./Projects.scss"

const ProjectsSection: React.FC = () => {
  const projects = ["1", "2", "3", "4", "5", "6"]

  return (
    <div className="projects-section">
      <h1 className="header-margin">/projects</h1>
      <div className="projects-section__grid">
        {projects.map((project, index: number) => {
          return <ProjectPreview key={index} index={index} name="test" />
        })}
      </div>
    </div>
  )
}

export default ProjectsSection
