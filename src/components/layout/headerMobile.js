import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  Box,
  Flex,
  Stack,
  Text,
  Divider,
  Img,
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  useDisclosure,
} from "@chakra-ui/react"
import styled from "@emotion/styled"
import "./style.css"
import { ContactButtonMobile } from "../buttons/contact buttons/index"

const HeaderMobile = () => {
  const data = useStaticQuery(graphql`
    query SidebarMobile {
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
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Box
      borderBottom=".5px solid #525050"
      h="100px"
      display={{ base: "block", lg: "none" }}
    >
      <Flex
        h="100%"
        w="90%"
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
        bg="black.700"
      >
        <Flex w="100px" h="100px" alignItems="center" justifyContent="center">
          <Link to="/">
            <img
              src={data.prismicSidebar.data.company_logo.url}
              alt={data.prismicSidebar.data.company_logo.alt}
            />
          </Link>
        </Flex>
        <Box zIndex="9999">
          <MenuIconBox
            display="block"
            mr={{ base: "5%", sm: "0" }}
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div />
            <div />
            <div />
          </MenuIconBox>
        </Box>
        <Modal isOpen={isOpen}>
          <ModalContent
            h="100vh"
            pt="100px"
            bg="black.700"
            color="white.50"
            margin="0 auto"
          >
            <ModalMenuLinks />
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  )
}

export default HeaderMobile

const MenuIconBox = styled(Box)`
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  outline: thin-dotted;
  z-index: 11;

  div {
    width: 2rem;
    height: 0.25rem;
    color: white;
    background: ${({ isOpen }) => (isOpen ? "white" : "white")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: opacity 300ms, transform 300ms;
    :first-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(-20px)" : "translateX(0)"};
    }
    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
const MenuItem = ({ children, to = "/", ...rest }) => {
  return (
    <Link to={to}>
      <Text
        display="block"
        fontSize="clamp(1.953rem, 5vw, 3.052rem)"
        fontWeight="400"
        _hover={{ textDecoration: "underline" }}
        {...rest}
      >
        {children}
      </Text>
    </Link>
  )
}

export const ModalMenuLinks = () => {
  return (
    <Stack w="90%" margin="0 auto" spacing="5rem">
      <Stack spacing="1.5rem">
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/news">News</MenuItem>
        <MenuItem to="/about">Partners</MenuItem>
        <MenuItem to="/career">Career</MenuItem>
        <MenuItem to="/about">Contact</MenuItem>
      </Stack>
      <ContactButtonMobile>Work with us</ContactButtonMobile>
    </Stack>
  )
}
