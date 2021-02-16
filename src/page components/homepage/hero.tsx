import React from "react"
import { Flex, Heading, Text, Box, Grid, Button } from "@chakra-ui/react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FaAngleDoubleRight } from "react-icons/fa"
import { GreetingLabel } from "../../components/typography/label"
import { MainHeading } from "../../components/typography/heading"
import "./style.css"

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query Home {
      prismicHome {
        data {
          greeting {
            text
          }
          hero_image {
            fluid(maxWidth: 1920) {
              ...GatsbyPrismicImageFluid
            }
            url
            alt
          }
          hero_button
          main_heading {
            text
          }
        }
      }
    }
  `)

  return (
    <>
      <Flex
        paddingTop="10rem"
        width="min(1440px, 80%)"
        flexDirection="column"
        margin="auto"
        color="white.50"
      >
        <Box marginBottom="5rem" w="min(75rem, 100%)">
          <GreetingLabel>{data.prismicHome.data.greeting.text}</GreetingLabel>
          <MainHeading mt="2rem">
            {data.prismicHome.data.main_heading.text}
          </MainHeading>
        </Box>
      </Flex>
      <Box
        maxW="1440px"
        w={{ base: "100%", md: "80%" }}
        margin="auto"
        paddingY="2rem"
      >
        <BackgroundImage
          className="hero-image"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          fluid={data.prismicHome.data.hero_image.fluid}
        >
          <div className="hero-items">
            <div className="box1" />
            <div className="grid-items-column box2" />
            <div className="grid-items-column box3" />
            <div className="grid-items-column box4" />
            <Button
              color="white.50"
              bg="transparent"
              w="100%"
              h="100%"
              borderRadius="none"
              border="0.5px solid #A7A7A7"
              className="grid-items-cta"
              _hover={{
                bg: "white.50",
                color: "black.700",
              }}
              rightIcon={<FaAngleDoubleRight />}
            >
              {data.prismicHome.data.hero_button}
            </Button>
            <div className="grid-items-extender" />
          </div>
        </BackgroundImage>
      </Box>
    </>
  )
}

export default HeroSection
