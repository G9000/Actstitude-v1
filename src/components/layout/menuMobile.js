import React from "react"
import { Link } from "gatsby"
import { Box, Flex, Stack, Text } from "@chakra-ui/react"
import { ContactButtonMobile } from "../buttons/contact buttons/index"
import styled from "@emotion/styled"

export const MenuMobile = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
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
  )
}

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
