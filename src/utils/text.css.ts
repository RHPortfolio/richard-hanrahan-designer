import { style, styleVariants } from "@vanilla-extract/css"

const blue = "12, 18, 73"
const red = "209, 15, 14"


export const header = style({
  fontSize: "3rem",
  lineHeight: "3.1rem",
  margin: "1rem 0 0 0"
})

export const subHeader = style({
  fontSize: "2.2rem",
  lineHeight: "2.3rem",
  margin: "0.7rem 0 0 0"
})



export const colorBlue = style({
  color: "rgba(" + blue + ", 1)"
})


export const colorRed = style({
  color: "rgba(" + red + ", 1)"
})
