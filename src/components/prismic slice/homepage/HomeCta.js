import React from "react"
import { Box, Flex, Link } from "@chakra-ui/react"
import { MainHeading } from "../../typography/heading"
import { FaAngleDoubleRight } from "react-icons/fa"

const HomeCTASlice = ({ slice }) => (
  <Flex
    flexDirection="column"
    alignItems="center"
    h="60vh"
    px="7.5%"
    justify="center"
    margin="0 auto"
    textAlign="center"
    color="white.50"
    borderTop="1px solid #525050"
    mt="10rem"
  >
    <MainHeading maxW="765px">{slice.primary.section_heading.text}</MainHeading>
    <Link
      href={slice.primary.call_to_action_link.url}
      _hover={{
        textDecoration: "none",
      }}
    >
      <Flex
        as="button"
        align="center"
        mt="5rem"
        p=".5rem 1.5rem"
        h="80px"
        fontSize="clamp(1rem, 5vw, 1.75rem)"
        alignItems="center"
        w={{ base: "270px", md: "400px" }}
        justifyContent="space-between"
        border=".5px solid #525050"
        bg="transparent"
        borderRadius="none"
        _hover={{
          bg: "white.50",
          color: "black.700",
        }}
      >
        {slice.primary.call_to_action_label}

        <FaAngleDoubleRight />
      </Flex>
    </Link>
  </Flex>
)

export default HomeCTASlice
