import { style, styleVariants } from "@vanilla-extract/css"
import { colors } from "@root/colors.css"

export const container = style({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  padding: 0
})

// inverting colours in theme
export const tag = style({
  background: colors.text,
  color: colors.background,
  padding: "0.2rem",
    listStyle: "none",
    marginRight: "2vw"
})
