import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Box, Stack, Link, Text, Flex } from "@chakra-ui/react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ContactHeader from "../components/prismic slice/contactpage/ContactHeader"
import SliceZone from "../components/SliceZone"
import "../themes/style.scss"

const ContactPage = ({ data }) => {
  if (!data) return null
  const document = data.allPrismicContactPage.edges[0].node.data

  const headerContent = {
    title: document.page_title,
    subheading: document.contact_copy,
    url: document.contact_link,
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <Helmet bodyAttributes={{ class: "about-page" }} />
      <Box className="about-content" px="7.5%">
        <ContactHeader headerContent={headerContent} />
      </Box>
      <SliceZone sliceZone={document.body} />
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  query Aboutpage {
    allPrismicContactPage {
      edges {
        node {
          data {
            page_title {
              text
            }
            contact_copy
            contact_link {
              url
            }
            body {
              ... on PrismicContactPageBodyAddress {
                slice_type
                items {
                  country
                  street_address
                  google_link {
                    url
                  }
                }
              }
              ... on PrismicContactPageBodyImage {
                slice_type
                primary {
                  image {
                    url
                    alt
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
