import React from "react"
import { Button } from "@chakra-ui/react"
import { FaAngleDoubleRight } from "react-icons/fa"

export const ContactButton = ({ children, ...props }) => (
  <Button
    rightIcon={<FaAngleDoubleRight />}
    height="100px"
    width="260px"
    padding=".5rem 2.5rem"
    fontWeight="400"
    letterSpacing="1px"
    textAlign="center"
    fontSize="1.2rem"
    color="white.50"
    bg="transparent"
    transform="rotate(-90deg) translateY(-80%) translateX(30%)"
    justifyContent="space-between"
    borderRadius="0"
    _hover={{
      bg: "white.50",
      color: "black.700",
      textDecoration: "none",
    }}
    {...props}
  >
    {children}
  </Button>
)
