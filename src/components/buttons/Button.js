import React from "react"
import { Button } from "@chakra-ui/react"

export const ButtonToggler = ({ children, ...props }) => (
  <Button
    fontSize="1.563rem"
    bg="transparent"
    p="0"
    _hover={{
      textDecoration: "underline",
    }}
    _active={{
      bg: "none",
    }}
    {...props}
  >
    {children}
  </Button>
)
