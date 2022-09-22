import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "@root/theme.css"
import { colors } from "@root/colors.css"

export const navLogo = style({
  margin: "0 auto",
  maxWidth: "100%",
})

export const footerLogo = style({
  margin: "0 auto",
  maxWidth: "100%"
})

export const logoImage = style({
  height: "100%",
  width: "390px",
  background: "linear-gradient(87deg, " + colors.primary + ", " + colors.text + ")"
})

export const mobileLogoImage = style({
  height: "100%",
  width: "90vw",
  background: "linear-gradient(87deg, " + colors.primary + ", " + colors.text + ")"
})
