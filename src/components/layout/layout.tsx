import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import Sidebar from "./sidebar"
import HeaderMobile from "./headerMobile"
import Footer from "./footer"
import Header from "./header"

interface LayoutProps {
  children(): void
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Box bg="black.700">
        <Flex flexDirection={{ base: "column", lg: "row" }}>
          <Sidebar />
          <HeaderMobile />
          <Box overflowX="hidden">
            <Header />
            {children} <Footer />
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Layout
