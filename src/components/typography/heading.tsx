import React from "react"
import { Heading } from "@chakra-ui/react"

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
    as="h2"
    fontSize="clamp(1.999rem, 3.5vw, 2.875rem)"
    fontWeight="600"
    {...props}
  >
    {children}
  </Heading>
)
