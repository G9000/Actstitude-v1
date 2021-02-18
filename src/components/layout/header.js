import React from "react"
import { Flex, Text, Stack } from "@chakra-ui/react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <Flex px="5%" h="100px" alignItems="center" color="white.50">
      <Stack
        marginLeft="auto"
        direction="row"
        fontSize="1.1875rem"
        spacing="2rem"
      >
        <Link to="/">About</Link>
        <Link to="/">News</Link>
        <Link to="/">Partner</Link>
        <Link to="/">Career</Link>
        <Link to="/">Contact</Link>
      </Stack>
    </Flex>
  )
}

export default Header
