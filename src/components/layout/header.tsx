import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box, Stack, Link } from "@chakra-ui/react"
import { SocialIcon } from "../buttons/social buttons/index"
import { ContactButton } from "../buttons/contact buttons/index"
import "./style.css"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaAngleDoubleRight,
} from "react-icons/fa"

const Header = () => {
  const data = useStaticQuery(graphql`
    query Sidebar {
      prismicSidebar {
        data {
          company_logo {
            url
            alt
          }
          email {
            url
          }
          facebook {
            url
          }
          instagram {
            url
          }
          linkedin {
            url
          }
        }
      }
    }
  `)
  return (
    <Box
      position="sticky"
      top="0"
      left="0"
      display={{ base: "none", xl: "flex" }}
      h="100vh"
      w="100px"
      flexDirection="column"
      justifyContent="space-between"
      bg="black.700"
      borderRight=".5px solid #525050"
    >
      <Flex w="100px" h="100px" alignItems="center" justifyContent="center">
        <Link to="/">
          <img
            src={data.prismicSidebar.data.company_logo.url}
            alt={data.prismicSidebar.data.company_logo.alt}
          />
        </Link>
      </Flex>
      <Stack spacing="0">
        <ContactButton
          className="button"
          as={Link}
          href={data.prismicSidebar.data.email.url}
          isExternal
          borderRight=".5px solid #525050"
        >
          Work with us
        </ContactButton>
        <SocialIcon
          as={Link}
          href={data.prismicSidebar.data.facebook.url}
          isExternal
          borderTop=".5px solid #525050"
        >
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon
          as={Link}
          href={data.prismicSidebar.data.instagram.url}
          isExternal
          borderTop=".5px solid #525050"
        >
          <FaInstagram />
        </SocialIcon>
        <SocialIcon
          as={Link}
          href={data.prismicSidebar.data.linkedin.url}
          isExternal
          borderTop=".5px solid #525050"
        >
          <FaLinkedinIn />
        </SocialIcon>
      </Stack>
    </Box>
  )
}

export default Header
