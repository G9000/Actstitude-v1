import React from "react"
import { Heading, Text } from "@chakra-ui/react"

export const MainHeading = ({ children, ...props }) => (
  <Heading
    as="h1"
    fontSize="clamp(1.999rem, 5vw, 3.998rem)"
    fontWeight="600"
    {...props}
  >
    {children}
  </Heading>
)

export const SectionHeading = ({ children, ...props }) => (
  <Heading
    fontSize="clamp(1.625rem, 3.5vw, 2.875rem)"
    fontWeight="600"
    {...props}
  >
    {children}
  </Heading>
)

export const SectionSubheading = ({ children, ...props }) => (
  <Text fontSize="1.414rem" fontWeight="300" {...props}>
    {children}
  </Text>
)
