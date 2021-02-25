import React from "react"
import { Flex, Box, Button } from "@chakra-ui/react"
import BackgroundImage from "gatsby-background-image"
import { FaAngleDoubleRight } from "react-icons/fa"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "@emotion/styled"
import { Breakpoints } from "../../../utils/Breakpoints"
import "../../../themes/style.scss"

export const HeroSection = ({ homeHeroContent }) => {
  return (
    <Box paddingY="2rem" margin="0 auto">
      <BackgroundImage
        id="hero-image"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        fluid={homeHeroContent.image.fluid}
        alt={homeHeroContent.image.alt}
      >
        <HeroGrid>
          <div />
          <div />
          <div />
          <div />
          <div>
            <AnchorLink to="/about#team" title="Team">
              <Button
                bg="transparent"
                w="100%"
                h="100%"
                fontSize="clamp(1rem, 3.5vw, 1.75rem)"
                borderRadius="none"
                border="0.5px solid rgba(255, 255, 255, 0.5)"
                borderLeft="none"
                borderRight="none"
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
          </div>
          <div />
        </HeroGrid>
      </BackgroundImage>
    </Box>
  )
}

const HeroGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1.5fr 1fr;
  grid-template-rows: 1fr 70px;
  @media ${Breakpoints.md} {
    grid-template-columns: 1fr 2fr;
  }

  div {
    border-left: 0.5px solid rgba(255, 255, 255, 0.5);
    :first-child {
      border-left: none;
      grid-column: 1;
      grid-row: 1 / span 3;
    }
    :nth-child(2) {
      grid-column: 2;
      grid-row: 1 / span 3;
    }
    :nth-child(3) {
      grid-column: 3;
      grid-row: 1 / span 2;
    }
    :nth-child(4) {
      grid-column: 4;
      grid-row: 1 / span 2;
    }
    :nth-child(5) {
      grid-column: 3;
      grid-row: 2;
    }
    :last-child {
      grid-column: 4;
      grid-row: 2;
      border-top: 0.5px solid #a7a7a7;
    }
    @media ${Breakpoints.md} {
      :first-child {
        grid-column: 1;
        grid-row: 1 / span 2;
      }
      :nth-child(2) {
        grid-column: 2;
        grid-row: 1 / span 2;
      }
      :nth-child(3) {
        grid-column: 3;
        grid-row: 1;
      }
      :nth-child(4) {
        display: none;
      }
      :last-child {
        display: none;
      }
    }
    @media ${Breakpoints.sm} {
      :nth-child(3) {
        display: none;
      }
      :nth-child(5) {
        grid-column: 2 / span 3;
      }
    }
  }
`
