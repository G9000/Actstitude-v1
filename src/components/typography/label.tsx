import React from "react"
import { Text } from "@chakra-ui/react"

export const Label = ({ children, ...props }) => (
  <Text
    fontSize="1.125rem"
    letterSpacing="3px"
    textTransform="uppercase"
    {...props}
  >
    {children}
  </Text>
)
