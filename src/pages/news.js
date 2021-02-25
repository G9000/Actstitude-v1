import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Box, Grid, Text } from "@chakra-ui/react"
import Layout from "../components/layout/layout"
import NewsProto from "../components/NewsProto"
import SEO from "../components/seo"

const NewsPage = props => (
  <Layout>
    <Box px="7.5%" color="white.50" pb="20rem">
      <SEO title="News" />
      <Helmet bodyAttributes={{ class: "news-page" }} />
      <Box as="section" py="5rem">
        <Box maxW="650px">
          <Text as="h2" textStyle="h2">
            Short news & announcements from the studio
          </Text>
        </Box>
      </Box>

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
