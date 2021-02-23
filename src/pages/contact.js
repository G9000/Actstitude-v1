import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Box, Stack, Link, Text } from "@chakra-ui/react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import {
  SectionHeading,
  SectionSubheading,
} from "../components/typography/heading"

const ContactPage = props => {
  const { data } = props
  const content = data.prismicContactPage.data
  const PageHeading = content.page_title.text
  const PageSubheading = content.contact_copy
  const ContactLink = content.contact_link.url

  return (
    <Layout>
      <Box py="10rem" px="7.5%" color="white.50">
        <Box pb="10rem">
          <SEO title="Contact" />
          <Helmet bodyAttributes={{ class: "contact-page" }} />
          <Stack maxW="650px" spacing="5rem">
            <SectionHeading>{PageHeading}</SectionHeading>
            <Link href={ContactLink} isExternal>
              <SectionSubheading maxW="650px">
                {PageSubheading}
              </SectionSubheading>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Layout>
  )
}

export default ContactPage

export const PostQuery = graphql`
  query contact {
    prismicContactPage {
      data {
        page_title {
          text
        }
        contact_copy
        contact_link {
          url
        }
      }
    }
  }
`
