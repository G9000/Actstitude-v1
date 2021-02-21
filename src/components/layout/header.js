import React from "react"
import { Flex, Text, Stack } from "@chakra-ui/react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = () => {
  return (
    <Flex
      display={{ base: "none", lg: "flex" }}
      px="7.5%"
      h="100px"
      alignItems="center"
      color="white.50"
    >
      <Stack
        marginLeft="auto"
        direction="row"
        fontSize="1.1875rem"
        spacing="2rem"
      >
        <Link to="/about">About</Link>
        <AnchorLink to="/about#partner" title="Patner">
          <span>Partner</span>
        </AnchorLink>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
      </Stack>
    </Flex>
  )
}

export default Header
