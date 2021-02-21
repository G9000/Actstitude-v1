import React from "react"
import { Flex, Box, Button } from "@chakra-ui/react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FaAngleDoubleRight } from "react-icons/fa"
import { Label } from "../../components/typography/label"
import { MainHeading } from "../../components/typography/heading"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "./style.css"

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query HomeHero {
      prismicHomePage {
        data {
          greeting {
            text
          }
          heading {
            text
          }
          hero_image {
            fluid(maxWidth: 2000, maxHeight: 2000) {
              ...GatsbyPrismicImageFluid
            }
            url
            alt
          }
          hero_button_label
        }
      }
    }
  `)

  return (
    <Box px="7.5%" margin="0 auto" color="white.50">
      <Flex paddingTop="10rem" flexDirection="column">
        <Box marginBottom="5rem" w="min(75rem, 100%)">
          <Label>{data.prismicHomePage.data.greeting.text}</Label>
          <MainHeading mt="2rem">
            {data.prismicHomePage.data.heading.text}
          </MainHeading>
        </Box>
      </Flex>
      <Box paddingY="2rem">
        <BackgroundImage
          className="hero-image"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          fluid={data.prismicHomePage.data.hero_image.fluid}
          alt={data.prismicHomePage.data.hero_image.alt}
        >
          <div className="hero-items">
            <div className="box1" />
            <div className="grid-items-column box2" />
            <div className="grid-items-column box3" />
            <div className="grid-items-column box4" />
            <AnchorLink
              to="/about#team"
              title="Team"
              className="grid-items-cta"
            >
              <Button
                bg="transparent"
                w="100%"
                h="100%"
                fontSize="clamp(1rem, 3.5vw, 1.75rem)"
                borderRadius="none"
                border="0.5px solid #A7A7A7"
                className="grid-items-cta"
                _hover={{
                  bg: "white.50",
                  color: "black.700",
                }}
                rightIcon={<FaAngleDoubleRight />}
              >
                {data.prismicHomePage.data.hero_button_label}
              </Button>
            </AnchorLink>

            <div className="grid-items-extender" />
          </div>
        </BackgroundImage>
      </Box>
    </Box>
  )
}

export default HeroSection
