import * as React from "react"
import * as styles from "@components/image-wall.css"
import ImageWallImage from "@components/image-wall-image.js"
import YearImage from "@components/year-image.js"

export default function ImageWallCollection({ designs, year }) {


  return (
    <>
      <YearImage year={year} />
      {designs.map((design) => {
        return (<>
          <ImageWallImage
            key={design.node.id}
            title={design.node.title}
            src={design.node.mainImage.url}
            category={"Print"} /></>
        )
      })}
    </>

  )}
