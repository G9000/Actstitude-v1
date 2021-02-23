import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as PrismicLink } from "prismic-reactjs"
import { Link as ChakraLink } from "@chakra-ui/react"
import linkResolver from "./LinkResolver"

const CustomLink = (type, element, content, children, index) => {
  if (element.data.link_type === "Document") {
    return (
      <GatsbyLink to={linkResolver(element.data)} key={element.data.id}>
        {content}
      </GatsbyLink>
    )
  }

  if (element.data.link_type === "Web") {
    return (
      <PrismicLink key={element.data.id} to={linkResolver(element.data)}>
        <ChakraLink textDecoration="underline">{content}</ChakraLink>
      </PrismicLink>
    )
  }

  return null
}

export default CustomLink
