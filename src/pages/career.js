import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Box, Stack } from "@chakra-ui/react"
import PageHeader from "../components/PageHeader"
import SliceZone from "../components/SliceZone"
import "../themes/style.scss"

const CareerPage = ({ data }) => {
  if (!data) return null
  const document = data.allPrismicCareerPage.edges[0].node.data

  const headerContent = {
    title: document.page_heading,
  }

  return (
    <Layout>
      <SEO title="Career" />
      <Helmet bodyAttributes={{ class: "career-page" }} />
      <Box pb="10rem" className="career-content" px="7.5%">
        <PageHeader headerContent={headerContent} />
        <SliceZone sliceZone={document.body} />
      </Box>
    </Layout>
  )
}

export default CareerPage

export const query = graphql`
  query Careerpage {
    allPrismicCareerPage {
      edges {
        node {
          data {
            page_heading {
              text
            }
            body {
              ... on PrismicCareerPageBodyCareerOpening {
                slice_type
                primary {
                  title {
                    raw
                  }
                  job_apply_redirection {
                    url
                  }
                }
                items {
                  job_title {
                    text
                  }
                  job_description {
                    raw
                  }
                  job_location
                }
              }
              ... on PrismicCareerPageBodyCareerContact {
                id
                slice_type
                primary {
                  contact_title {
                    raw
                  }
                  contact_paragraph {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
