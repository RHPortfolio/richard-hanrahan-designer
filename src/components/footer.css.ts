import { style } from "@vanilla-extract/css"
import { colors } from "@root/colors.css"

export const footer = style({
  background: colors.text,
  color: colors.background,
  padding: "3vh 0vw 1vh 0vw;",

})

export const footerContent = style({
  width: "90vw",
    margin: "0 auto"
})
