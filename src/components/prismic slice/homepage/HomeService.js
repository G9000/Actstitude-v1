import React from "react"
import { Box, Flex, Text, Button } from "@chakra-ui/react"
import { SectionHeading } from "../../typography/heading"
import { TwoColFlex } from "../../Flex"
import { Label } from "../../typography/label"
import BackgroundImage from "gatsby-background-image"
import { SwiperSlide } from "swiper/react"
import Swiper from "react-id-swiper"
import "swiper/swiper.scss"
import { FaAngleDoubleRight } from "react-icons/fa"
import "./style.css"

const ServiceSlice = ({ slice }) => (
  <Box as="section" mt="10rem">
    <Box px="7.5%" margin="0 auto" color="white.50">
      <TwoColFlex marginBottom="5rem">
        <Box w={{ base: "100%", md: "400px", lg: "550px", xl: "800px" }}>
          <Label color="grey.100">{slice.primary.label.text}</Label>
          <SectionHeading mt="2rem">
            {slice.primary.section_heading.text}
          </SectionHeading>
        </Box>
        <Box mt={{ base: "3rem", md: "0" }}>
          <Flex justify="flex-end">
            <Button
              px="0"
              fontWeight="400"
              fontSize="clamp(1rem, 3.5vw, 1.4375rem)"
              bg="transparent"
              rightIcon={<FaAngleDoubleRight />}
              _hover={{
                bg: "transparent",
              }}
              _active={{
                bg: "transparent",
              }}
            >
              {slice.primary.mobile_helper}
            </Button>
          </Flex>
        </Box>
      </TwoColFlex>
    </Box>
    <Box as="section" className="cursor-custom ">
      <Swiper
        freeMode="true"
        spaceBetween={50}
        slidesPerView="auto"
        shouldSwiperUpdate
      >
        {slice.items.map((serviceItem, index) => (
          <SwiperSlide>
            <div className="gallery-item" key={`gallery-item=${index}`}>
              <ServiceContainer width="370px" p="0">
                <BackgroundImage
                  className="service-images"
                  fluid={serviceItem.service_thumbnail.fluid}
                  alt={serviceItem.service_thumbnail.alt}
                />
                <ServiceContent>
                  <ServiceName>{serviceItem.service_name.text}</ServiceName>
                  <Text fontSize="1rem" color="grey.100">
                    {serviceItem.service_description}
                  </Text>
                </ServiceContent>
              </ServiceContainer>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  </Box>
)

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

const ServiceName = ({ children, ...props }) => (
  <Text
    fontWeight="600"
    fontSize={{ base: "1.2rem", md: "1.375rem" }}
    color="linear-gradient(to right, #ef1c51 50%, black 50%)"
    transition=" all .3s ease-out"
    mt={4}
    {...props}
  >
    {children}
  </Text>
)

export default ServiceSlice
