import { style } from "@vanilla-extract/css"


export const section = style({
  position: "relative" })

export const container = style({
  position: "relative",
  padding: 0,
  display: "flex",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  alignContent: "center",
  alignItems: "center" })

export const image = style({
  position: "relative",
  listStyle: "none",
      marginRight: "2vw",
      flexBasis: "200px" })
