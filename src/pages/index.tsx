import React from "react"
import { Link } from "gatsby"
import MeSection from "../components/me/Me"

import Layout from "../components/layout/Layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MeSection />
  </Layout>
)

export default IndexPage
