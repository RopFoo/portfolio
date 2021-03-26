import { graphql, useStaticQuery } from "gatsby"
import { ProjectPreviewType } from "../models/Project.model"

export function useProjectsPreviewQuery() {
  const { allStrapiProjects } = useStaticQuery(graphql`
    query AllProjectPreviews {
      allStrapiProjects {
        nodes {
          title
          id
        }
      }
    }
  `)

  const projects = allStrapiProjects.nodes as ProjectPreviewType[]

  return {
    projects,
  }
}
