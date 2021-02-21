import React from "react"
import { Stack, Text } from "@chakra-ui/react"

import Img from "gatsby-image"

const TeamProto = props => {
  return (
    <Stack spacing="1rem" textAlign="center">
      <Img fluid={props.data.picture.fluid} alt={props.data.picture.alt} />
      <Text fontSize="1.25rem" fontWeight="600">
        {props.data.name}
      </Text>
    </Stack>
  )
}

export default TeamProto
