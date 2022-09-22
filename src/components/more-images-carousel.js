import React from 'react'
import * as styles from '@components/more-images-carousel.css'

export default function MoreImagesCarousel({imageData}) {

  const imgSuffix = "&w=200"
  console.log('this is the imageData', imageData)
  return (
    <aside className={styles.section}>
      <ul className={styles.container}>
        {imageData.map((image, index) => {
          return (<li className={styles.image}><img src={image.url + imgSuffix} /></li>)
        })}
      </ul>
    </aside>
  )
}
