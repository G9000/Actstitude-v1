import React from "react"
import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Link as ChakraLink,
  HStack,
} from "@chakra-ui/react"
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { BsArrowUpRight } from "react-icons/bs"

const Footer = () => {
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

  const document = data.prismicFooter.data
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
        flexDirection={{ base: "column", lg: "row" }}
        justify="space-between"
      >
        <Box p="0 2rem 3rem 0">
          <Heading
            fontSize="clamp(1.563rem, 3.5vw, 2.375rem)"
            fontWeight="900"
            maxW="450px"
          >
            {document.tagline.text}
          </Heading>
        </Box>
        <Stack direction={{ base: "column", md: "row" }} spacing="2rem">
          <Stack w="25ch" spacing="1rem">
            <Text fontWeight="600" fontSize="1.2rem">
              {document.malaysia}
            </Text>
            <Text>{document.malaysia_full_address}</Text>
            <HStack spacing=".5rem">
              <ChakraLink
                textDecoration="underline"
                href={document.malaysia_google_map.url}
                isExternal
              >
                Get Direction
              </ChakraLink>
              <BsArrowUpRight />
            </HStack>
          </Stack>
          <Stack w="25ch" spacing="1rem">
            <Text fontWeight="600" fontSize="1.2rem">
              {document.singapore}
            </Text>
            <Text>{document.singapore_full_address}</Text>
            <HStack spacing=".5rem">
              <ChakraLink
                textDecoration="underline"
                href={document.singapore_google_map.url}
                isExternal
              >
                Get Direction
              </ChakraLink>
              <BsArrowUpRight />
            </HStack>
          </Stack>
        </Stack>
      </Flex>
      <Flex
        direction={{ base: "column", md: "row" }}
        mt="3rem"
        justify={{ base: "flex-start", md: "space-between" }}
      >
        <Stack direction={{ base: "column", sm: "row" }} spacing="1rem">
          <InternalLink to="/about">About</InternalLink>
          <InternalLinkAnchor to="/about#partner" title="Patner">
            <span>Partner</span>
          </InternalLinkAnchor>
          <InternalLink to="/news">News</InternalLink>
          <InternalLink to="/career">Career</InternalLink>
          <InternalLink to="/contact">Contact</InternalLink>
        </Stack>
        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing="1rem"
          mt={{ base: "1rem", md: "0" }}
        >
          <InternalLink to="/">Privacy Policy</InternalLink>
          <Text>
            © {new Date().getFullYear()} Actstitude. All Rights Reserved.
          </Text>
        </Stack>
      </Flex>
    </Flex>
  )
}

export default Footer

const InternalLink = ({ children, to = "/", ...rest }) => {
  return (
    <GatsbyLink to={to}>
      <Text _hover={{ textDecoration: "underline" }} {...rest}>
        {children}
      </Text>
    </GatsbyLink>
  )
}

const InternalLinkAnchor = ({ children, to = "/", ...rest }) => {
  return (
    <AnchorLink to={to}>
      <Text _hover={{ textDecoration: "underline" }} {...rest}>
        {children}
      </Text>
    </AnchorLink>
  )
}
