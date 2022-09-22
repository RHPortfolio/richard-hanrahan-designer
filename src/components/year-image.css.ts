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
  padding: "2vh",
    float: "left",
    width: "100%",
    fontSize: "3rem",
    marginBottom: "1vw",
    fontWeight: 700
})
