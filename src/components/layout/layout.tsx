import React from "react"
import PropTypes from "prop-types"
import { Box, Flex } from "@chakra-ui/react"
import Header from "./header"
import HeaderMobile from "./headerMobile"

const Layout = ({ children }) => {
  return (
    <Box bg="black.700">
      <Flex flexDirection={{ base: "column", xl: "row" }}>
        <Header />
        <HeaderMobile />
        <Box>{children}</Box>
      </Flex>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
