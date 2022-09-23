import * as React from 'react'
import * as styles from "@components/image-carousel.css"

export default function ImageCarousel({images}) {

  const imgParams = "?auto=format&crop=faces,top&w=1.0&h=1.0&fit=crop"
  return (
    <div className={styles.imageCarousel}>
    {images.map((image) => { return (
      <img
        className={styles.carouselImage}
        srcSet={
          image.src + imgParams + "&dpr=1 1x," +
          image.src + imgParams + "&dpr=2 2x," +
          image.src + imgParams + "&dpr=3 3x,"}
        src={image.src + imgParams + "&q=0.3"}
        title={image.title}
        alt={image.title + ", created by Richard Hanrahan"} />
    )})}
    </div>
  )
}
