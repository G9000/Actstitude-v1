import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import Header from "./header"
import HeaderMobile from "./headerMobile"

interface LayoutProps {
  children(): void
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Box bg="black.700">
        <Flex flexDirection={{ base: "column", lg: "row" }}>
          <Header />
          <HeaderMobile />
          <Box>{children}</Box>
        </Flex>
      </Box>
    </>
  )
}

export default Layout
