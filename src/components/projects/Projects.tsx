import React from "react"

import "./Projects.scss"

const ProjectsSection: React.FC = () => {
  const projects = ["1", "2", "3", "4", "5", "6"]

  return (
    <div className="projects-section">
      <h1 className="header-margin">/projects</h1>
      <div className="projects-section__grid">
        {projects.map((project, index: number) => {
          return (
            <div className={`project-element project-element__${index}`}>
              {index}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectsSection
