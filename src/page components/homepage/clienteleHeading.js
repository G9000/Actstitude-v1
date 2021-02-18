import React from "react"
import { Text, Heading, Flex, Grid, GridItem, Button } from "@chakra-ui/react"
import { FaAngleDoubleRight } from "react-icons/fa"
import { SectionHeading } from "../../components/typography/heading"
import { Label } from "../../components/typography/label"

const ClienteleHeading = () => {
  return (
    <div>
      <Grid
        color="white.50"
        templateColumns="repeat(5, 1fr)"
        templateColumns={{ base: "repeat(1 1fr)", md: "repeat(5, 1fr)" }}
        templateRows={{ base: "repeat(2, auto)", md: "repeat(1, 1fr)" }}
        gap={8}
        px="10%"
        margin="0 auto"
        marginBottom="5rem"
        alignItems="flex-end"
      >
        <GridItem
          colSpan={{ base: "1", md: "3" }}
          rowSpan={{ base: "1", md: "1" }}
        >
          <Label color="grey.100">Clientele</Label>
          <SectionHeading mt="2rem">
            Our experience allows us to bring our disruptive approach to any
            sector
          </SectionHeading>
        </GridItem>
        <GridItem
          mt={{ base: "5rem", md: "0" }}
          colSpan={{ base: "1", md: "2" }}
          rowSpan={{ base: "2", md: "1" }}
        >
          <Flex justify="flex-end">
            <Button
              fontSize="1.75rem"
              px="0"
              fontWeight="400"
              fontSize="clamp(1rem, 3.5vw, 1.4375rem)"
              bg="transparent"
              _hover={{
                bg: "transparent",
              }}
              rightIcon={<FaAngleDoubleRight />}
            >
              be our partner
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </div>
  )
}

export default ClienteleHeading
