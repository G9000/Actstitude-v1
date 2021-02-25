import React from "react"
import { Box, Flex, Text, Button } from "@chakra-ui/react"

// Homepage Flex Usage

export const TwoColFlex = ({ children, ...props }) => (
  <Flex
    flexDirection={{ base: "column", md: "row" }}
    align={{ base: "flex-start", md: "flex-end" }}
    justify="space-between"
    {...props}
  >
    {children}
  </Flex>
)
