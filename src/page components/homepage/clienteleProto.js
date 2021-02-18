import React from "react"
import { Flex, Image } from "@chakra-ui/react"

const ClienteleProto = props => {
  return (
    <Flex h="125px" w="300" alignItems="center" justifyContent="center">
      <Image src={props.data.brand_logo.url} alt={props.data.brand_logo.alt} />
    </Flex>
  )
}

export default ClienteleProto
