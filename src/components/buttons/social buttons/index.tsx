import React from "react"
import { Flex } from "@chakra-ui/react"

export const SocialIcon = ({ children, ...props }) => (
  <Flex
    height="100px"
    width="100px"
    fontSize="29px"
    justifyContent="center"
    alignItems="center"
    color="grey.100"
    bg="transparent"
    _hover={{
      bg: "white.50",
      color: "black.700",
    }}
    {...props}
  >
    {children}
  </Flex>
)
