import React from "react"
import { Box, Text } from "@chakra-ui/react"

const PageHeader = ({ headerContent }) => (
  <Box as="section" py="5rem">
    <Box maxW="650px">
      <Text as="h2" textStyle="h2">
        {headerContent.title.text}
      </Text>
    </Box>
  </Box>
)

export default PageHeader
