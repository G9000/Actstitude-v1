import React from "react"
import PropTypes from "prop-types"
import { Box } from "@chakra-ui/react"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <Box bg="black.700">
      <Box>
        <Header />
        {children}
      </Box>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
