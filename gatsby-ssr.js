import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Theme from "./src/themes/theme"

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={Theme}>{element}</ChakraProvider>
)
