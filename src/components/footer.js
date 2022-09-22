import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Twitter,
  Twitch,
  Instagram,
  Facebook,
  Youtube,
  GitHub,
  Linkedin,
} from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
  VisuallyHidden,
} from "./ui"
import Logo from "@components/logo"
import * as styles from "@components/footer.css"
import {colors} from '@root/colors.css'

const iconColor = colors.background;

const socialMedia = [{
    url: "https://twitter.com/thehitch",
    name: "Twitter",
    icon: <Twitter color={iconColor} />,
  },
  {
    url: "https://www.linkedin.com/in/richard-hanrahan",
    name: "LinkedIn",
    icon: <Linkedin color={iconColor} />,
  },
  {
    url: "https://youtube.com",
    name: "YouTube",
    icon: <Youtube color={iconColor}/>,
  },
  {
    url: "https://github.com",
    name: "GitHub",
    icon: <GitHub color={iconColor}/>,
  }]

export default function Footer() {


  return (
    <footer className={styles.footer}>

    <Flex variant="spaceBetween" className={styles.footerContent} responsive>
    <NavLink to="/">
      <VisuallyHidden>Home</VisuallyHidden>
      <Text> Chumchi Designs 2022</Text>
      </NavLink>
            <FlexList>
              {socialMedia &&
                socialMedia.map((link, index) => {

                  return (
                    link.url && (
                      <li key={link+"_"+index}>
                        <IconLink to={link.url}>
                          <VisuallyHidden>{link.name}</VisuallyHidden>
                          {link.icon}
                        </IconLink>
                      </li>
                    )
                  )
                })}
            </FlexList>
          </Flex>
    </footer>
  )
}
