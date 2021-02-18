import React from "react"
import Layout from "../components/layout/layout"
import { VStack, Flex, Box, Grid, Container } from "@chakra-ui/react"
import SEO from "../components/seo"
import "swiper/swiper.scss"
import Swiper from "react-id-swiper"
import HeroSection from "../page components/homepage/hero"
import ServiceProto from "../page components/homepage/serviceProto"
import ServiceHeading from "../page components/homepage/serviceHeading"
import ClienteleHeading from "../page components/homepage/clienteleHeading"
import ClienteleProto from "../page components/homepage/clienteleProto"
import CallToAction from "../page components/homepage/callToAction"
import "../page components/homepage/style.css"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <VStack spacing="10rem">
      <HeroSection />
      <ServiceHeading />
    </VStack>
    <Flex justify="center">
      <Swiper
        freeMode="true"
        spaceBetween={50}
        slidesPerView="auto"
        shouldSwiperUpdate
      >
        {props.data.servicelist.edges.map(servicelist => (
          <ServiceProto data={servicelist.node.data} />
        ))}
      </Swiper>
    </Flex>
    <Box mt="10rem">
      <ClienteleHeading />
      <Grid
        gridTemplateColumns={{ base: "repeat(3, 1fr)", md: "repeat(6, 1fr)" }}
        px="10%"
      >
        {props.data.clientelelist.edges.map(clientelelist => (
          <ClienteleProto data={clientelelist.node.data} />
        ))}
      </Grid>
    </Box>
    <Flex
      align="center"
      mt="10rem"
      color="white.50"
      textAlign="center"
      justify="center"
      borderTop="1px solid #525050"
    >
      <CallToAction />
    </Flex>
  </Layout>
)

export default IndexPage

export const ServiceQuery = graphql`
  query Service {
    servicelist: allPrismicServices(sort: { fields: data___sort }) {
      edges {
        node {
          data {
            description
            name {
              text
            }
            thumbnail {
              fluid(maxWidth: 1000) {
                ...GatsbyPrismicImageFluid
              }
              url
            }
          }
        }
      }
    }
    clientelelist: allPrismicClientele {
      edges {
        node {
          data {
            brand_logo {
              url
              alt
            }
          }
        }
      }
    }
  }
`
