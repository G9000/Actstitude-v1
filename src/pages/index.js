import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import { Box } from "@chakra-ui/react"
import SEO from "../components/seo"
import "swiper/swiper.scss"
import SliceZone from "../components/SliceZone"
import {
  HomeHeader,
  HeroSection,
} from "../components/prismic slice/homepage/index"

import "../themes/style.scss"

const IndexPage = ({ data }) => {
  if (!data) return null
  const document = data.allPrismicHomePage.edges[0].node.data

  const homeHeaderContent = {
    greeting: document.greeting,
    title: document.page_heading,
  }

  const homeHeroContent = {
    image: document.hero_image,
    button: document.hero_button_label,
  }

  return (
    <Layout>
      <SEO title="Actstitude" />
      <Helmet bodyAttributes={{ class: "home-page" }} />
      <Box mt="5rem" overflowX="visible">
        <HomeHeader homeHeaderContent={homeHeaderContent} />
        <HeroSection homeHeroContent={homeHeroContent} />
        <SliceZone sliceZone={document.body} />
      </Box>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Homepage {
    allPrismicHomePage {
      edges {
        node {
          data {
            greeting {
              text
            }
            page_heading {
              text
            }
            hero_image {
              fluid(maxWidth: 2000) {
                ...GatsbyPrismicImageFluid
              }
              alt
            }
            hero_button_label
            body {
              ... on PrismicHomePageBodyServices {
                slice_type
                primary {
                  label {
                    text
                  }
                  section_heading {
                    text
                  }
                  mobile_helper
                }
                items {
                  service_thumbnail {
                    fluid(maxWidth: 1000) {
                      ...GatsbyPrismicImageFluid
                    }
                    alt
                  }
                  service_name {
                    text
                  }
                  service_description
                }
              }
              ... on PrismicHomePageBodyClientele {
                slice_type
                primary {
                  label {
                    text
                  }
                  section_heading {
                    text
                  }
                }
                items {
                  client_logo {
                    url
                    alt
                  }
                }
              }
              ... on PrismicHomePageBodyCallToAction {
                slice_type
                primary {
                  section_heading {
                    text
                  }
                  call_to_action_label
                  call_to_action_link {
                    url
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
