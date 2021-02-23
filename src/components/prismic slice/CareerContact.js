import React from "react"
import { RichText } from "prismic-reactjs"
import { Box, Link, Text } from "@chakra-ui/react"
import CustomLink from "../../utils/LinkSerializer"
import htmlSerializer from "../../utils/HtmlSerializer"
import "../../themes/style.scss"

const CareerContact = ({ slice }) => (
  <Box as="section" mt="10rem">
    <Box textStyle="h4" w={{ base: "100%", md: "50%" }}>
      <RichText
        render={slice.primary.contact_paragraph.raw}
        htmlSerializer={htmlSerializer}
        serializeHyperlink={CustomLink}
      />
    </Box>
  </Box>
)

export default CareerContact
