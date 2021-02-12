import React from "react"

import "./Projects.scss"

const ProjectsSection: React.FC = () => {
  const projects = ["1", "2", "3", "5"]

  return (
    <div className="projects-section">
      <h1 className="header-margin">/projects</h1>
      <div className="projects-section__grid">
        {projects.map((project, index: number) => {
          return (
            <div
              className={`projects-section__grid__element${
                index % 2 === 0 ? "--large" : "--small"
              }`}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectsSection
