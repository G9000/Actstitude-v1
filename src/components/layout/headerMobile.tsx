import React from "react"
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
} from "@chakra-ui/react"
import { SocialIcon } from "../buttons/social buttons/index"
import { ContactButtonMobile } from "../buttons/contact buttons/index"
import "./style.css"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaAngleDoubleRight,
} from "react-icons/fa"
import styled from "@emotion/styled"

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
    <Box borderBottom=".5px solid #525050" h="100px">
      <Box
        display={{ base: "flex", xl: "none" }}
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
      </Box>

      <Modal width="100%" isOpen={isOpen}>
        <ModalOverlay bg="black.900" />
        <ModalContent
          height="100vh"
          bg="black.700"
          display="block"
          color="white.50"
          mt="0"
          mb="0"
          maxW="100%"
        >
          <ModalMenuLinks />
        </ModalContent>
      </Modal>
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

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
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

const ModalMenuLinks = () => {
  const [value, setValue] = React.useState()
  return (
    <Flex
      w="80%"
      margin="auto"
      justify="space-between"
      py={{ base: "20%", xl: "10%" }}
      h="100%"
    >
      <Stack w="100%" spacing="5rem" direction="column" justify="flex-start">
        <Stack spacing="1.5rem">
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/news">News</MenuItem>
          <MenuItem to="/about">Partners</MenuItem>
          <MenuItem to="/career">Career</MenuItem>
          <MenuItem to="/about">Contact</MenuItem>
        </Stack>
        <ContactButtonMobile>Work with us</ContactButtonMobile>
      </Stack>
    </Flex>
  )
}
