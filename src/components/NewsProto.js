import React from "react"
import { Stack, Image, Text } from "@chakra-ui/react"

const NewsProto = props => {
  return (
    <Stack spacing="1rem">
      <Image src={props.data.thumbnail.url} alt={props.data.thumbnail.alt} />
      <Text fontSize="1.999rem" fontWeight="600">
        {props.data.title.text}
      </Text>
      <Text fontSize="1rem" color="grey.100">
        {props.data.excerpt.text}
      </Text>
    </Stack>
  )
}

export default NewsProto
