import * as React from "react"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import * as styles from "@components/layout.css"
import ImageWallContainer from "@components/image-wall-container"

export default function Homepage(props) {
  const { edges: designs } = props.data.allDatoCmsDesignProject

  return (
    <Layout className={styles.page} >
      <ImageWallContainer designs={designs} />
    </Layout>)
}

export const query = graphql`
  {
    allDatoCmsDesignProject(sort: {fields: when, order: DESC}) {
      edges {
        node {
          client{
            clientSlug
          }
          slug
          id
          when
          highlighted
          title
          cleanImage {
            url
            height
            resolutions(width:340) {
              height
            }
          }
          mainImage {
            url
            height
            resolutions(width:340) {
              height
            }
          }
        }
      }
    }
  }
`
