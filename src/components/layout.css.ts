import { style, styleVariants } from "@vanilla-extract/css"
import { colors } from '@root/colors.css'

export const page = style({
  background: colors.background,
  outline: "none",
  display: "flex",
  flexDirection: "column"
})

export const container = style({
  width: "70vw",
  margin: "0 auto",
  // marginTop: "18vh"
})

export const mobileContainer = style({
  width: "95vw",
  margin: "0 auto",
  // marginTop: "18vh"
})


export const project = style({
  // width: "95vw",
  // margin: "0 auto",
  // marginTop: "18vh"
})
