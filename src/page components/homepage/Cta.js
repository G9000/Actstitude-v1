import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import { useStaticQuery, grapqhql } from "gatsby"
import { ExternalLink } from "../../components/buttons/link/index"
import { MainHeading } from "../../components/typography/heading"
import { FaAngleDoubleRight } from "react-icons/fa"

const CallToAction = props => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      h="90vh"
      px="7.5%"
      justify="center"
      margin="0 auto"
      textAlign="center"
      color="white.50"
      borderTop="1px solid #525050"
    >
      <MainHeading maxW="765px">{props.data.section_heading.text}</MainHeading>
      <Flex
        as="button"
        mt="5rem"
        p=".5rem 1.5rem"
        h="80px"
        w="min(400px, 95%)"
        fontSize="clamp(1rem, 5vw, 1.75rem)"
        alignItems="center"
        justifyContent="space-between"
        border=".5px solid #525050"
        borderRadius="none"
        _hover={{
          bg: "white.50",
          color: "black.700",
        }}
      >
        <ExternalLink href={props.data.call_to_action_link.url}>
          {props.data.call_to_action_label}
        </ExternalLink>
        <FaAngleDoubleRight />
      </Flex>
    </Flex>
  )
}

export default CallToAction
