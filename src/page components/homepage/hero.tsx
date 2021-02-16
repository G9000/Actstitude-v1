import React from "react"
import { Flex, Heading, Text, Box, Grid, Button } from "@chakra-ui/react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FaAngleDoubleRight } from "react-icons/fa"
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
          main_heading {
            text
          }
        }
      }
    }
  `)

  return (
    <Flex
      paddingY="10rem"
      width="min(1440px, 80%)"
      flexDirection="column"
      margin="auto"
      color="white.50"
    >
      <Box marginBottom="5rem">
        <Text>{data.prismicHome.data.greeting.text}</Text>
        <Heading>{data.prismicHome.data.main_heading.text}</Heading>
      </Box>
      <BackgroundImage
        className="hero-image"
        h="500px"
        w="1000px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        fluid={data.prismicHome.data.hero_image.fluid}
      >
        <div className="hero-items">
          <div className="box1">1</div>
          <div className="grid-items-column box2">2</div>
          <div className="grid-items-column box3">3</div>
          <div className="grid-items-column box4">4</div>
          <Button
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
            Meet the team
          </Button>
          <div className="grid-items-extender">4</div>
        </div>
      </BackgroundImage>
    </Flex>
  )
}

export default HeroSection
