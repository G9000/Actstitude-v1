import React from "react"
import { Box, Grid, Image, Flex } from "@chakra-ui/react"
import { SectionHeading } from "../../typography/heading"
import { TwoColFlex } from "../../Flex"
import { Label } from "../../typography/label"
import "swiper/swiper.scss"
import { FaAngleDoubleRight } from "react-icons/fa"
import "./style.css"

const ClienteleSlice = ({ slice }) => (
  <Box as="section" mt="10rem" px="7.5%">
    <Box margin="0 auto" color="white.50">
      <TwoColFlex>
        <Box w={{ base: "100%", md: "400px", lg: "550px", xl: "800px" }}>
          <Label color="grey.100">{slice.primary.label.text}</Label>
          <SectionHeading mt="2rem">
            {slice.primary.section_heading.text}
          </SectionHeading>
        </Box>
        <Box mt={{ base: "5rem", md: "0" }}></Box>
      </TwoColFlex>
    </Box>
    <Grid
      mt="5rem"
      gridTemplateColumns={{ base: "repeat(3, 1fr)", md: "repeat(6, 1fr)" }}
    >
      {slice.items.map((serviceItem, index) => (
        <div className="gallery-item" key={`gallery-item=${index}`}>
          <Flex h="125px" w="300" alignItems="center" justifyContent="center">
            <Image
              src={serviceItem.client_logo.url}
              alt={serviceItem.client_logo.alt}
            />
          </Flex>
        </div>
      ))}
    </Grid>
  </Box>
)

export default ClienteleSlice
