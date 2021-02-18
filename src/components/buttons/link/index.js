import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as ChakraLink, Button } from "@chakra-ui/react"
import { FaArrowRight } from "react-icons/fa"

export const InternalLink = props => (
  <GatsbyLink
    textDecoration="none"
    _hover={{ textDecoration: "none" }}
    {...props}
  />
)

export const ExternalLink = props => (
  <ChakraLink
    textDecoration="none"
    _hover={{ textDecoration: "none" }}
    {...props}
  />
)

export const LearnMoreExternalLink = ({ children, ...props }) => (
  <Button
    as={ExternalLink}
    rightIcon={<FaArrowRight />}
    p="0"
    justifyContent="flex-start"
    bg="transparent"
    fontSize="1rem"
    _hover={{
      bg: "none",
    }}
    _active={{
      bg: "none",
    }}
    {...props}
  >
    {children}
  </Button>
)
