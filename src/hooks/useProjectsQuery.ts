import { graphql, useStaticQuery } from "gatsby"
import { ProjectPreviewType, ProjectType } from "../models/Project.model"

export function useProjectsPreviewQuery() {
  const { allStrapiProjects } = useStaticQuery(graphql`
    query AllProjectPreviews {
      allStrapiProjects {
        nodes {
          title
          id
          slug
        }
      }
    }
  `)

  const projects = allStrapiProjects.nodes as ProjectPreviewType[]

  return {
    projects,
  }
}
