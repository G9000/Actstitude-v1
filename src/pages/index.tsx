import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import HeroSection from "../page components/homepage/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
  </Layout>
)

export default IndexPage
