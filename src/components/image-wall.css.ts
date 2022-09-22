import { style, styleVariants } from "@vanilla-extract/css"

export const image = style({
  width: "100%",
  height: "15vh",
  objectFit: "cover",
  marginBottom: "1vw",
  border: 0,
  float: "left"
})
export const highlightedImage = style({
  width: "100%",
  height: "30vh",
  objectFit: "cover",
  marginBottom: "1vw",
  border: 0,
  float: "left"
})

export const imageWallContainer = style({
  width: "90vw",
  columns: "4 250px",
  columnGap: "1vw",
  margin: "0 auto",
  marginTop: "20vh",
  marginBottom: "5vh"
})

export const imageWallImage = style({
  width: "100%",
  marginBottom: "1vw",
  objectFit: "cover"
})

export const imageWallImageText = style({
  left: "-35vw",
  position: "relative",
  margin: 0,
  padding: "20px",
  color: "white",
  width: "75%"
})

export const imageLeftCol = style({
  gridArea: "left"
})

export const imageMiddleCol = style({
  gridArea: "middle"
})
export const imageRightCol = style({
  gridArea: "right"
})
