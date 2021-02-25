import React from "react"
import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Link as ChakraLink,
  HStack,
} from "@chakra-ui/react"
import "swiper/swiper.scss"
import { FourColGrid } from "../../Grid"
import { BsArrowUpRight } from "react-icons/bs"

const AddressSlice = ({ slice }) => (
  <Box as="section" mt="5rem" px="7.5%">
    <FourColGrid>
      {slice.items.map((serviceItem, index) => (
        <div className="gallery-item" key={`gallery-item=${index}`}>
          <Stack w="25ch" spacing="1rem">
            <Text fontWeight="600" fontSize="1.2rem">
              {serviceItem.country}
            </Text>
            <Text>{serviceItem.street_address}</Text>
            <HStack spacing=".5rem">
              <ChakraLink
                textDecoration="underline"
                href={serviceItem.google_link.url}
                isExternal
              >
                Get Direction
              </ChakraLink>
              <BsArrowUpRight />
            </HStack>
          </Stack>
        </div>
      ))}
    </FourColGrid>
  </Box>
)

const ServiceContainer = ({ children, ...props }) => (
  <Box maxWidth={{ base: "300px", sm: "500px" }} px="4" {...props}>
    {children}
  </Box>
)

export default AddressSlice
