import React, { useState} from "react"
import * as styles from "@components/image-wall.css"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

export default function ImageWallImage({ title, src, category, index, highlighted, expandedHeight, column, url, hasPage, isMobile, displayImage}) {


  const [ expanded, setExpanded ] = useState(false);
  const isHighlighted = highlightedCheck(highlighted);

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

   function addDimensions(isMobile, isHighlighted, multiplier = 1){
     // default - 300 x 120
     // highlighted - 300 x 220
     var width = 300 * multiplier
     var height = 150 * multiplier

     // mobile highlighted - 360 x 260
     // mobile - 360 x 130
     if ( isMobile ) {
       width = 360 * multiplier;
       height = 160 * multiplier;
     }

     return `&w=${width}&h=${isHighlighted ? 2 * height : height}`
   }

  function determineImage(){
    // if (isMobile && isHighlighted){
    //   return displayImage.mobileHighlighted
    // }
    //
    // if (isMobile ){
    //   return displayImage.mobile
    // }
    //
    // if(isHighlighted) {
    //   return displayImage.highlighted
    // }
    //
    // return displayImage.default
    return displayImage.image
  }

  const params = "?fit=crop&q=85&auto=format&crop=focalpoint";
  const children = (<GatsbyImage
    image={determineImage()}
    alt={title + ", created by Richard Hanrahan"}
    style={expanded ?
      { transition: "2s", width: "100%", height: expandedHeight, maxWidth: "inherit" }
      : { transition: "0.5s"}}
      className={
        (isHighlighted ? styles.highlightedImage : styles.image)
        + ` column${column} `
        + (isMobile ? styles.mobileImageMargin : styles.imageMargin)}
        title={title}

    />)
    // Ready to delete
  // const oldChildren = (<img
  //   key={index}
  //   style={expanded ?
  //     { transition: "2s", width: "100%", height: expandedHeight, maxWidth: "inherit" }
  //     : { transition: "0.5s"}}
  //   className={
  //     (isHighlighted ? styles.highlightedImage : styles.image)
  //     + ` column${column} `
  //     + (isMobile ? styles.mobileImageMargin : styles.imageMargin)}
  //   srcSet={
  //     src + params + addDimensions(isMobile, isHighlighted) + "&dpr=1 1x," +
  //     src + params + addDimensions(isMobile, isHighlighted, 2) + "&dpr=2 2x," +
  //     src + params + addDimensions(isMobile, isHighlighted, 2.5) + "&dpr=3 3x," }
  //   src={ src + params + addDimensions(isMobile, isHighlighted)}
  //   title={title}
  //   alt={title + ", created by Richard Hanrahan"} />)

  return (
    <>
        <Link to={url}>{children}</Link>
    </>
  )

}
