import React from "react"
import { Text } from "@chakra-ui/react"

export const SectionTitle = ({ children, ...props }) => (
  <Text fontSize="1.6rem" fontWeight="400" {...props}>
    {children}
  </Text>
)
