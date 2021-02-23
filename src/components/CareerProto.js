import React from "react"
import { RichText } from "prismic-reactjs"
import { Stack, Image, Text } from "@chakra-ui/react"

const CareerProto = props => {
  return (
    <Stack spacing="1rem">
      <RichText>{props.data.job_title.raw}</RichText>
    </Stack>
  )
}

export default CareerProto
