import React from "react"
import { Box, Text } from "@chakra-ui/react"

const ContactHeader = ({ headerContent }) => (
  <Box as="section" py="5rem">
    <Box maxW="650px">
      <Text as="h2" textStyle="h2">
        {headerContent.title.text}
      </Text>
      <Text fontSize="1.414rem" fontWeight="300" mt="5rem">
        {headerContent.subheading}
      </Text>
    </Box>
  </Box>
)

export default ContactHeader
