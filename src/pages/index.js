import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import { Box, Grid } from "@chakra-ui/react"
import SEO from "../components/seo"
import "swiper/swiper.scss"
import Swiper from "react-id-swiper"
import HeroSection from "../page components/homepage/hero"
import ServiceProto from "../page components/homepage/serviceProto"
import SectionHeading from "../page components/homepage/SectionHeading"
import ClienteleProto from "../page components/homepage/clienteleProto"
import CallToAction from "../page components/homepage/callToAction"
import "../page components/homepage/style.css"
import "../themes/style.scss"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Helmet bodyAttributes={{ class: "home-page" }} />
    <HeroSection />
    <Box mt="10rem" overflowX="visible">
      <SectionHeading data={props.data.servicesection.primary} />
      <div className="cursor-custom">
        <Swiper
          freeMode="true"
          spaceBetween={50}
          slidesPerView="auto"
          shouldSwiperUpdate
        >
          {props.data.servicesection.items.map(servicesection => (
            <ServiceProto data={servicesection} />
          ))}
        </Swiper>
      </div>
    </Box>
    <Box mt="10rem">
      <SectionHeading data={props.data.clientelesection.primary} />
      <Grid
        px="7.5%"
        gridTemplateColumns={{ base: "repeat(3, 1fr)", md: "repeat(6, 1fr)" }}
      >
        {props.data.clientelesection.items.map(clientelesection => (
          <ClienteleProto data={clientelesection} />
        ))}
      </Grid>
    </Box>
    <Box mt="10rem">
      <CallToAction data={props.data.calltoactionsection.primary} />
    </Box>
  </Layout>
)

export default IndexPage

export const ServiceQuery = graphql`
  query Home {
    servicesection: prismicHomePageBodyServices {
      primary {
        label {
          text
        }
        section_heading {
          text
        }
        call_to_action_label
        call_to_action_link {
          url
        }
      }
      items {
        service_thumbnail {
          fluid(maxWidth: 1000) {
            ...GatsbyPrismicImageFluid
          }
          url
        }
        service_name {
          text
        }
        service_description
        service_redirection
        service_redirection_link {
          url
        }
      }
    }
    clientelesection: prismicHomePageBodyClientele {
      primary {
        label {
          text
        }
        section_heading {
          text
        }
        call_to_action_label
        call_to_action_link {
          url
        }
      }
      items {
        client_logo {
          url
          alt
        }
      }
    }
    calltoactionsection: prismicHomePageBodyCallToAction {
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
`
