import React from "react"
import { Box, Flex, Grid, GridItem, Link } from "@chakra-ui/react"
import { FaAngleDoubleRight } from "react-icons/fa"
import { SectionHeading } from "../../components/typography/heading"
import { Label } from "../../components/typography/label"

const ServiceHeading = props => {
  return (
    <Box px="7.5%" margin="0 auto" color="white.50">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        marginBottom="5rem"
        align={{ base: "flex-start", md: "flex-end" }}
        justify="space-between"
      >
        <Box w={{ base: "100%", md: "400px", lg: "550px", xl: "800px" }}>
          <Label color="grey.100">{props.data.label.text}</Label>
          <SectionHeading mt="2rem">
            {props.data.section_heading.text}
          </SectionHeading>
        </Box>
        <Box mt={{ base: "5rem", md: "0" }}>
          <Flex justify="flex-end">
            <Link
              href={props.data.call_to_action_link}
              px="0"
              fontWeight="400"
              fontSize="clamp(1rem, 3.5vw, 1.4375rem)"
              bg="transparent"
              _hover={{
                bg: "transparent",
              }}
            >
              {props.data.call_to_action_label}
            </Link>
            <FaAngleDoubleRight />
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default ServiceHeading
