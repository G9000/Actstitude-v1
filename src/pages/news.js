import React from "react"
import { graphql } from "gatsby"
import { Box, Grid, Heading } from "@chakra-ui/react"
import Layout from "../components/layout/layout"
import NewsProto from "../components/NewsProto"
import SEO from "../components/seo"
import { SectionHeading } from "../components/typography/heading"

const NewsPage = props => (
  <Layout>
    <Box px="7.5%" color="white.50" pt="10rem" pb="20rem">
      <SEO title="News" />
      <SectionHeading pb="10rem" maxW="650px">
        Short news & announcements from the studio
      </SectionHeading>
      <Grid
        gap="4rem"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
      >
        {props.data.newslist.items.map(newslist => (
          <NewsProto data={newslist} />
        ))}
      </Grid>
    </Box>
  </Layout>
)

export default NewsPage

export const PostQuery = graphql`
  query Posts {
    newslist: prismicNewsBodyNews {
      items {
        thumbnail {
          url
          alt
        }
        title {
          text
        }
        excerpt {
          text
        }
        link {
          url
        }
      }
    }
  }
`
