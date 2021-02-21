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
} from "@chakra-ui/react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { LearnMoreExternalLink } from "../buttons/link/index"

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
      py="5rem"
      justifyContent="center"
      bg="teal.100"
      flexDirection="column"
    >
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Box maxW={{ base: "100%", md: "40%", xl: "30%" }}>
          <Heading fontSize="2.375rem" fontWeight="900">
            {data.prismicFooter.data.tagline.text}
          </Heading>
        </Box>
        <Stack
          mt={{ base: "2rem", md: "0" }}
          spacing="2rem"
          direction={{ base: "column", md: "row" }}
          marginLeft={{ base: "0", md: "auto" }}
          maxW="560px"
        >
          <Stack spacing="1rem" textAlign="left" justify="flex-start">
            <CountryName>{data.prismicFooter.data.malaysia}</CountryName>
            <Box>
              <Text>{data.prismicFooter.data.malaysia_full_address}</Text>
            </Box>

            <LearnMoreExternalLink
              target="_blank"
              href={data.prismicFooter.data.malaysia_google_map.url}
            >
              Get Direction
            </LearnMoreExternalLink>
          </Stack>
          <Stack spacing="1rem" textAlign="left" justify="flex-start">
            <CountryName>{data.prismicFooter.data.singapore}</CountryName>
            <Box>
              <Text>{data.prismicFooter.data.singapore_full_address}</Text>
            </Box>

            <LearnMoreExternalLink
              target="_blank"
              href={data.prismicFooter.data.singapore_google_map.url}
            >
              Get Direction
            </LearnMoreExternalLink>
          </Stack>
        </Stack>
      </Flex>
      <Flex mt={{ base: "4rem", md: "8rem" }}>
        <Stack spacing="1rem" direction={{ base: "column", sm: "row" }}>
          <Link to="/">Privacy Policy</Link>
          <Text>
            © {new Date().getFullYear()} Actstitude. All Rights Reserved.
          </Text>
        </Stack>
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
