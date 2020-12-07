import React from "react"
import { Link } from "gatsby"
import MeSection from "../components/me/Me"

import Layout from "../components/layout/Layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import SkillsSection from "../components/skills/Skills"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <MeSection />
    <SkillsSection />
  </Layout>
)

export default IndexPage
