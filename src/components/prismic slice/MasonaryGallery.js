import React from "react"
import { Box } from "@chakra-ui/react"

const ContactGallery = ({ slice }) => {
  return (
    <Box mt="10rem">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
    </Box>
  )
}

export default ContactGallery
