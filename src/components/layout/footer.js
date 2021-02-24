import React from "react"
import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Footer = props => {
  const data = useStaticQuery(graphql`
    query Footer {
      prismicFooter {
        data {
          tagline {
            text
          }
          malaysia
          malaysia_full_address
          malaysia_google_map {
            url
          }
          singapore
          singapore_full_address
          singapore_google_map {
            url
          }
        }
      }
    }
  `)
  return (
    <Flex
      px="7.5%"
      py="3rem"
      justifyContent="center"
      bg="#D9D9D9"
      color="black.700"
      flexDirection="column"
    >
      <Flex
        w="100%"
        flexDirection={{ base: "column", xl: "row" }}
        justify="space-between"
      >
        <Box maxW={{ base: "100%", md: "40%", xl: "30%" }}>
          <Heading fontSize="2.375rem" fontWeight="900">
            {data.prismicFooter.data.tagline.text}
          </Heading>
        </Box>
        <Flex
          direction="column"
          align={{ base: "flex-start", xl: "flex-end" }}
          mt={{ base: "2rem", xl: "0" }}
        >
          <Stack
            direction={{ base: "column", sm: "row" }}
            fontSize="1.4rem"
            fontWeight="900"
            spacing="1rem"
          >
            <Link to="/about">About</Link>
            <AnchorLink to="/about#partner" title="Patner">
              <span>Partner</span>
            </AnchorLink>
            <Link to="/news">News</Link>
            <Link to="/career">Career</Link>
            <Link to="/contact">Contact</Link>
          </Stack>
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing="1rem"
            mt="2rem"
          >
            <ChakraLink>Malaysia</ChakraLink>
            <ChakraLink>Singapore</ChakraLink>
            <Link to="/">Privacy Policy</Link>
            <Text>
              © {new Date().getFullYear()} Actstitude. All Rights Reserved.
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer

const CountryName = ({ children, ...props }) => (
  <Text fontSize="1.4375rem" fontWeight="600" {...props}>
    {children}
  </Text>
)
