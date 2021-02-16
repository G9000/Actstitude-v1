import React from "react"
import { Text } from "@chakra-ui/react"

export const GreetingLabel = ({ children, ...props }) => (
  <Text
    fontSize="1.125rem"
    letterSpacing="3px"
    textTransform="uppercase"
    {...props}
  >
    {children}
  </Text>
)
