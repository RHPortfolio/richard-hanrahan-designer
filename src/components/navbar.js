import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
 import { Link } from "gatsby"
import * as styles from "./navbar.css"
import Logo from '@components/logo.js'
import { isMobileViewport } from '@utils/common.js';
import useWindowsDimension from '@hooks/useWindowsDimension.js';

export default function Navbar() {

  const { width: screenWidth } = useWindowsDimension();

  // const data = useStaticQuery(graphql`
  //   query navbar{
  //     allDatoCmsUi(filter: {
  //       platform: {
  //         title: {
  //           eq: "design portfolio"
  //         }
  //       }, title: {
  //           eq: "Chumchi Masthead"
  //         }
  //       })
  //
  //       {
  //         edges {
  //           node {
  //             element {
  //               url
  //             }
  //         title
  //       }
  //     }
  //   }}`)


  // const { element: logo } = data.allDatoCmsUi.edges[0].node
  // console.log(JSON.stringify(data))

  return (
    <nav className={isMobileViewport(screenWidth) ? styles.navbarMobile : styles.navbar}>
      <Link to="/" className={styles.logo}>
      <Logo isMobile={isMobileViewport(screenWidth)} />
      </Link>
    </nav>
  )
}



// ":{"url":"https://www.datocms-assets.com/79085/1662491290-chumchi_design_logo.svg"},"title":"Chumchi Masthead"}}]}}
