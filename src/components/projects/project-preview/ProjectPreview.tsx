import React from "react"

interface ProjectPreviewProps {
  index: number
  name: string
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ index, name }) => {
  return (
    <div className={`project-element project-element__${index}`}>
      <h2>{name}</h2>
    </div>
  )
}

export default ProjectPreview
