import { style, styleVariants } from "@vanilla-extract/css"
import { colors } from "@root/colors.css"

export const year = style({
  height: "12vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  padding: "2vh",
  background: "linear-gradient(87deg, " + colors.primary + ", " + colors.muted + ")",
  float: "left",
  width: "100%",
  fontSize: "3rem",
  fontWeight: 700
})

export const mobileMargin = style({
  marginBottom: "5vw"
})

export const margin = style({
  marginBottom: "1vw"
})
