import React from "react"
import {
  Box,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Button,
  HStack,
  Link,
  Badge,
} from "@chakra-ui/react"
import { RichText } from "prismic-reactjs"
import linkResolver from "../../utils/LinkResolver"
import { FaArrowDown } from "react-icons/fa"
import "../../themes/style.scss"

const CareerSlice = ({ slice }) => {
  return (
    <Box as="section">
      <Box textStyle="h4">
        <RichText
          render={slice.primary.title.raw}
          linkResolver={linkResolver}
        />
      </Box>
      <Box mt="5rem">
        {slice.items.map((careerItem, index) => (
          <Accordion allowToggle>
            <div className="gallery-item" key={`gallery-item=${index}`}>
              <AccordionItem
                border="none"
                borderBottom="1px"
                borderBottomColor="grey.100"
              >
                <AccordionButton
                  py="2rem"
                  fontSize="clamp(1.25rem, 3.5vw, 2.875rem)"
                  fontWeight="900"
                  color="inherit"
                  _hover={{
                    bg: "white.100",
                  }}
                >
                  <Flex align="center" w="100%" justify="space-between">
                    <Box w="80%" textAlign="left">
                      <Text>{careerItem.job_title.text}</Text>
                    </Box>

                    <Flex
                      bg="white.200"
                      borderRadius="50%"
                      w={{ base: "30px", lg: "50px" }}
                      h={{ base: "30px", lg: "50px" }}
                      justify="center"
                      align="center"
                    >
                      <FaArrowDown size="12" />
                    </Flex>
                  </Flex>
                </AccordionButton>
                <AccordionPanel color="inherit">
                  <Flex
                    py="4rem"
                    align={{ base: "flex-start", lg: "center" }}
                    justify="space-between"
                    flexDirection={{ base: "column", lg: "row" }}
                  >
                    <Box
                      maxW="75ch"
                      paddingRight={{ base: "0", lg: "5rem", xl: "0" }}
                    >
                      <HStack>
                        <Badge bg="white.100" textTransform="none">
                          Job Description
                        </Badge>
                        <Badge bg="white.100" textTransform="none">
                          {careerItem.job_location}
                        </Badge>
                      </HStack>
                      <Box mt="2rem" color="grey.300" textStyle="h5">
                        <RichText render={careerItem.job_description.raw} />
                      </Box>
                    </Box>
                    <Link
                      mt={{ base: "2rem", lg: "0" }}
                      href={slice.primary.job_apply_redirection.url}
                      isExternal
                      _hover={{
                        textDecoration: "none",
                      }}
                    >
                      <Button
                        bg="white.100"
                        _hover={{ bg: "black.700", color: "white.50" }}
                      >
                        Apply Now
                      </Button>
                    </Link>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </div>
          </Accordion>
        ))}
      </Box>
    </Box>
  )
}

export default CareerSlice
