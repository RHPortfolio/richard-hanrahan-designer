import { style, styleVariants } from "@vanilla-extract/css"

export const imageCarousel = style({
  width: "100%",
  background: "red",
  padding: "3vw",
  display: "flex",
  flexWrap: "wrap"
})

export const carouselImage = style({
  width: "23vw",
  objectFit: "cover"
})
