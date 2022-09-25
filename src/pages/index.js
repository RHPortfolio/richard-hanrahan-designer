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
            resolutions(width:340)  {
              height
            }
            image: gatsbyImageData(
            width: 360
            height: 300
            placeholder: BLURRED
            imgixParams: {fit: "crop", q: 85, auto: "format", crop: "focalpoint"}
          )

          }
          mainImage {
            url
            height
            resolutions(width:340) {
              height
            }
            image: gatsbyImageData(
            width: 360
            height: 300
            placeholder: BLURRED
            imgixParams: {fit: "crop", q: 85, auto: "format", crop: "focalpoint"}
          )
          }
        }
      }
    }
  }
`


// Removed this from Query for each image
// default: gatsbyImageData(
// width: 300
// height: 150
// placeholder: BLURRED
// imgixParams: {fit: "crop", q: 85, auto: "format", crop: "focalpoint"}
// )
// highlighted: gatsbyImageData(
// width: 300
// height: 300
// placeholder: BLURRED
// imgixParams: {fit: "crop", q: 85, auto: "format", crop: "focalpoint"}
// )
// mobile: gatsbyImageData(
// width: 360
// height: 160
// placeholder: BLURRED
// imgixParams: {fit: "crop", q: 85, auto: "format", crop: "focalpoint"}
// )
// mobileHighlighted: gatsbyImageData(
// width: 360
// height: 320
// placeholder: BLURRED
// imgixParams: {fit: "crop", q: 85, auto: "format", crop: "focalpoint"}
// )
