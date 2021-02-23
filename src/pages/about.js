import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Box, Stack, Text, Flex, HStack } from "@chakra-ui/react"
import Layout from "../components/layout/layout"
import { FourColGrid } from "../components/Grid"
import TeamProto from "../components/TeamProto"
import { ButtonToggler } from "../components/buttons/Button"
import SEO from "../components/seo"
import { SectionHeading } from "../components/typography/heading"
import { SectionTitle } from "../components/typography/text"
import "../themes/style.scss"

const AboutPage = props => {
  const { data } = props
  const [value, setValue] = React.useState("Singapore")
  const content = data.prismicAbout.data
  const PageHeading = content.heading.text
  const PageSubHeading = content.paragraph
  const SingaporeTitle = data.sgteamlist.primary.singapore_title.text
  const MalaysiaTitle = data.myteamlist.primary.malaysia_title.text
  const PartnerTitle = data.partnerlist.primary.partner_title.text
  return (
    <Layout>
      <Box px="7.5%" color="white.50" pt="10rem" pb="20rem">
        <SEO title="About" />
        <Helmet bodyAttributes={{ class: "about-page" }} />
        <Stack maxW="650px" spacing="2rem">
          <SectionHeading>{PageHeading}</SectionHeading>
          <Text fontSize="1.414rem" fontWeight="300">
            {PageSubHeading}
          </Text>
        </Stack>
        <Stack mt="10rem" spacing="5rem" id="#team">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify={{ base: "flex-start", md: "space-between" }}
          >
            {value === "Singapore" ? (
              <SectionTitle>{SingaporeTitle}</SectionTitle>
            ) : (
              <SectionTitle>{MalaysiaTitle}</SectionTitle>
            )}

            <HStack mt={{ base: "2rem", md: "0" }} spacing="2rem">
              <ButtonToggler
                onClick={() => setValue("Singapore")}
                className={
                  value === "Singapore" ? "button-active" : "button-unactive"
                }
              >
                Singapore
              </ButtonToggler>
              <ButtonToggler
                onClick={() => setValue("Malaysia")}
                className={
                  value === "Malaysia" ? "button-active" : "button-unactive"
                }
              >
                Malaysia
              </ButtonToggler>
            </HStack>
          </Flex>
          <Box>
            {value === "Singapore" ? (
              <FourColGrid>
                {props.data.sgteamlist.items.map(sgteamlist => (
                  <TeamProto data={sgteamlist} />
                ))}
              </FourColGrid>
            ) : (
              <FourColGrid>
                {props.data.myteamlist.items.map(myteamlist => (
                  <TeamProto data={myteamlist} />
                ))}
              </FourColGrid>
            )}
          </Box>
        </Stack>
        <Stack mt="10rem" spacing="5rem" id="partner">
          <Box>
            <Text
              fontSize="1.75rem"
              fontWeight="400"
              fontSize="clamp(1rem, 3.5vw, 1.4375rem)"
            >
              {PartnerTitle}
            </Text>
          </Box>
          <Box>
            <FourColGrid>
              {props.data.partnerlist.items.map(partnerlist => (
                <TeamProto data={partnerlist} />
              ))}
            </FourColGrid>
          </Box>
        </Stack>
      </Box>
    </Layout>
  )
}

export default AboutPage

export const PostQuery = graphql`
  query about {
    prismicAbout {
      data {
        heading {
          text
        }
        paragraph
      }
    }
    sgteamlist: prismicAboutBodySingaporeTeam {
      primary {
        singapore_title {
          text
        }
      }
      items {
        picture {
          fluid(maxWidth: 1000) {
            ...GatsbyPrismicImageFluid
          }
          url
          alt
        }
        name
      }
    }
    myteamlist: prismicAboutBodyMalaysiaTeam {
      primary {
        malaysia_title {
          text
        }
      }
      items {
        picture {
          fluid(maxWidth: 1000) {
            ...GatsbyPrismicImageFluid
          }
          url
          alt
        }
        name
      }
    }
    partnerlist: prismicAboutBodyPartner {
      primary {
        partner_title {
          text
        }
      }
      items {
        picture {
          fluid(maxWidth: 1000) {
            ...GatsbyPrismicImageFluid
          }
          url
          alt
        }
        name
        link {
          url
        }
      }
    }
  }
`
