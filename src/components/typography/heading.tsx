import React from "react"
import { Heading } from "@chakra-ui/react"

export const MainHeading = ({ children, ...props }) => (
  <Heading
    as="h1"
    fontSize="clamp(2.827rem, 5vw, 3.998rem)"
    fontWeight="600"
    {...props}
  >
    {children}
  </Heading>
)
