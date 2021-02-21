import React from "react"
import { Text } from "@chakra-ui/react"

export const Label = ({ children, ...props }) => (
  <Text
    fontSize="clamp(1rem, 3.5vw, 1.125rem)"
    letterSpacing="3px"
    textTransform="uppercase"
    {...props}
  >
    {children}
  </Text>
)
