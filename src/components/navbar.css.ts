import { style, styleVariants } from "@vanilla-extract/css"
import { colors } from '@root/colors.css'

export const navbar = style({
  height: "15vh",
    display: "flex",
    padding: "2vh",
    zIndex: "100",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    top: "0",
    position: "fixed",
    background: colors.muted,
    width: "100%"
})


export const navbarMobile = style({
  height: "15vh",
    display: "flex",
    padding: 0,
    margin: "0 auto",
    zIndex: "100",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    top: "0",
    position: "fixed",
    background: colors.muted,
    width: "100%",
    alignContent: "center"
})

export const logo = style({
  margin: "0 auto",
  maxWidth: "100%"
})

export const logoImage = style({
  height: "100%"
})
