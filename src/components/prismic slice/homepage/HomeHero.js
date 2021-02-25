import React from "react"
import { Flex, Box, Button } from "@chakra-ui/react"
import BackgroundImage from "gatsby-background-image"
import { FaAngleDoubleRight } from "react-icons/fa"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "./style.css"

export const HeroSection = ({ homeHeroContent }) => {
  return (
    <Box paddingY="2rem" px="7.5%" margin="0 auto">
      <BackgroundImage
        className="hero-image"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        fluid={homeHeroContent.image.fluid}
        alt={homeHeroContent.image.alt}
      >
        <div className="hero-items">
          <div className="box1" />
          <div className="grid-items-column box2" />
          <div className="grid-items-column box3" />
          <div className="grid-items-column box4" />
          <AnchorLink to="/about#team" title="Team" className="grid-items-cta">
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
              {homeHeroContent.button}
            </Button>
          </AnchorLink>

          <div className="grid-items-extender" />
        </div>
      </BackgroundImage>
    </Box>
  )
}
