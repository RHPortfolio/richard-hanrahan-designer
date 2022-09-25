import * as React from 'react';
import * as styles from './logo.css.ts';
import { Link, useStaticQuery, graphql } from "gatsby"
import logo from "@assets/chumchi_design_logo.svg"

export default function Logo({placement, isMobile}) {

  const data = useStaticQuery(graphql`
    query logo{
      allDatoCmsUi(filter: {
        platform: {
          title: {
            eq: "design portfolio"
          }
        }, title: {
            eq: "Chumchi Masthead"
          }
        })

        {
          edges {
            node {
              element {
                url
              }
          title
        }
      }
    }}`)

  // const url = data.allDatoCmsUi.edges[0].node.element.url

  // Styles SVG as an imported asset with theme specific coloring as per this: https://qawithexperts.com/article/html/how-to-change-color-of-svg-various-ways-using-css/414

  return (
    <Link to="/" className={placement === "footer" ? styles.footerLogo : styles.navLogo}>
      <div className={isMobile ? styles.mobileLogoImage : styles.logoImage} style={{
        webkitMask: "url(" + logo + ") no-repeat 50% 50%",
        webkitMaskSize: "contain",
        mask: "url(" + logo +") no-repeat 50% 50%",
        maskSize: "contain" }} />
    </Link>
  )
}
