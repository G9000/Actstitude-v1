import React from "react"
import { Box, Text, Flex, Link } from "@chakra-ui/react"
import BackgroundImage from "gatsby-background-image"
import { SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import "./style.css"
import { FaArrowRight } from "react-icons/fa"

const ServiceProto = props => {
  return (
    <SwiperSlide>
      <ServiceContainer width="370px" p="0">
        <Box w="100%">
          <BackgroundImage
            className="service-images"
            fluid={props.data.service_thumbnail.fluid}
            alt={props.data.service_thumbnail.alt}
          />
          <ServiceContent>
            <ServiceName>{props.data.service_name.text}</ServiceName>
            <Text fontSize="1.125rem" color="grey.100">
              {props.data.service_description}
            </Text>
            <Link href={props.data.service_redirection_link.url}>
              <Flex align="center" w="120px" justify="space-between">
                {props.data.service_redirection}
                <FaArrowRight />
              </Flex>
            </Link>
          </ServiceContent>
        </Box>
      </ServiceContainer>
    </SwiperSlide>
  )
}

export default ServiceProto

const ServiceContainer = ({ children, ...props }) => (
  <Box maxWidth={{ base: "300px", sm: "500px" }} px="4" {...props}>
    {children}
  </Box>
)

const ServiceContent = ({ children, ...props }) => (
  <Flex
    height="270px"
    p="2rem"
    direction="column"
    justify="space-between"
    width="100%"
    color="white.50"
    bg="black.900"
    {...props}
  >
    {children}
  </Flex>
)

const ServiceName = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link to="/">
      <Text
        fontWeight="600"
        fontSize="1.375rem"
        color="linear-gradient(to right, #ef1c51 50%, black 50%)"
        transition=" all .3s ease-out"
        mt={4}
        _hover={{
          color: "#ef1c51",
          textDecoration: "underline",
        }}
        {...rest}
      >
        {children}
      </Text>
    </Link>
  )
}
