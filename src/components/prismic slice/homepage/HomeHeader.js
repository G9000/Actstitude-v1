import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import { MainHeading } from "../../typography/heading"
import { Label } from "../../typography/label"

export const HomeHeader = ({ homeHeaderContent }) => (
  <Flex paddingTop="5rem" flexDirection="column" px="7.5%" color="inherit">
    <Box marginBottom="5rem" w="min(75rem, 100%)">
      <Label>{homeHeaderContent.greeting.text}</Label>
      <MainHeading mt="2rem">{homeHeaderContent.title.text}</MainHeading>
    </Box>
  </Flex>
)
