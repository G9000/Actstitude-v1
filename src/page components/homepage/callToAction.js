import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import { useStaticQuery, grapqhql } from "gatsby"
import { ExternalLink } from "../../components/buttons/link/index"
import { MainHeading } from "../../components/typography/heading"
import { FaAngleDoubleRight } from "react-icons/fa"

const CallToAction = () => {
  const data = useStaticQuery(graphql`
    query {
      prismicCallToAction {
        data {
          heading {
            text
          }
          action_title {
            text
          }
          action_email {
            url
          }
        }
      }
    }
  `)
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      h="90vh"
      maxW="765px"
      justify="center"
    >
      <MainHeading>{data.prismicCallToAction.data.heading.text}</MainHeading>
      <Flex
        as="button"
        mt="5rem"
        p=".5rem 1.5rem"
        h="80px"
        w="min(400px, 95%)"
        fontSize="clamp(1rem, 5vw, 1.75rem)"
        alignItems="center"
        justifyContent="space-between"
        border="1px solid white"
        borderRadius="none"
        _hover={{
          bg: "white.50",
          color: "black.700",
        }}
      >
        <ExternalLink href={data.prismicCallToAction.data.action_email.url}>
          {data.prismicCallToAction.data.action_title.text}
        </ExternalLink>
        <FaAngleDoubleRight />
      </Flex>
    </Flex>
  )
}

export default CallToAction
