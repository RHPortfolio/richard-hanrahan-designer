import { style, styleVariants } from "@vanilla-extract/css"

export const bannerImage = style({
  width: "100%",
  height: "70vh",
  objectFit: "cover"
})

export const caption = style({
  position: "absolute",
  right: 0,
  margin: 0
})
