import React, { useState} from "react"
import * as styles from "@components/image-wall.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

export default function ImageWallImage({ title, src, category, index, highlighted, expandedHeight, column, url, hasPage}) {

  const [ expanded, setExpanded ] = useState(false);

  function columnCalc(number){
    const remainder = number % 3;
    if (remainder == 2){
      return styles.imageRightCol
    }

    if (remainder == 2) {
      return styles.imageMiddleCol
    }

    return styles.imageLeftCol
  }

  function determineStyles(number) {

    return [
      styles.imageWallImage,
      columnCalc(number)
    ]
  }
  const regex = /highlighted/gm;

  function highlightedCheck(item){
    switch(typeof item){
      case "boolean":
      return item;
      case "string":
      return item.match(regex);
      case "array":
      return item.includes("highlighted");
      default:
      return false;
    }
  }

  function clickHandler(){
     setExpanded(!expanded)
   };

  const params = "?fit=crop&auto=format&crop=focalpoint&w=340";
  const children = (<img
    key={index}
    style={expanded ?
      { transition: "2s", width: "100%", height: expandedHeight, maxWidth: "inherit" }
      : { transition: "0.5s"}}
    className={(highlightedCheck(highlighted) ? styles.highlightedImage : styles.image) + " column" + column}
    srcSet={
      src + params + "&dpr=1 1x," +
      src + params + "&dpr=2 2x," +
      src + params + "&dpr=3 3x," }
    src={ src + "?fit=crop&auto=format&crop=focalpoint&w=340"}
    title={title}
    alt={title + ", created by Richard Hanrahan"} />)

  return (
    <>

        <Link to={url}>{children}</Link>


    </>
  )

}
