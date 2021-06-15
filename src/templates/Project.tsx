import { graphql } from "gatsby"
import React from "react"
import { ProjectType } from "../models/Project.model"

const Project: React.FC = ({ data }: any) => {
  const project: ProjectType = data.strapiProject
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  )
}

export default Project

export const query = graphql`
  query ProjectTemplate($slug: String!) {
    strapiProject(slug: { eq: $slug }) {
      title
      description
    }
  }
`
