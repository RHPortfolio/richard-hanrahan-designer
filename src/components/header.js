import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Navbar from '@components/navbar.js'
import { Menu, X } from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Space,
  NavLink,
  Button,
  InteractiveIcon,
  Nudge,
  VisuallyHidden,
} from "@components/ui"
import {
  mobileNavOverlay,
  mobileNavLink,
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
} from "@components/header.css"


export default function Header({logo}) {
  // const data = useStaticQuery(graphql`
  //   query {
  //     layout {
  //       header {
  //         id
  //         navItems {
  //           id
  //           navItemType
  //           ... on NavItem {
  //             href
  //             text
  //           }
  //           ... on NavItemGroup {
  //             name
  //             navItems {
  //               id
  //               href
  //               text
  //               description
  //               icon {
  //                 alt
  //                 gatsbyImageData
  //               }
  //             }
  //           }
  //         }
  //         cta {
  //           id
  //           href
  //           text
  //         }
  //       }
  //     }
  //   }
  // `)

  // const { navItems, cta } = data.layout.header
  // const [isOpen, setOpen] = React.useState(false)

  // React.useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflowY = "hidden"
  //   } else {
  //     document.body.style.overflowY = "visible"
  //   }
  // }, [isOpen])

  return (
    <header>
      <Navbar logo={logo} />
    </header>
  )
}
