import * as React from "react"
import * as styles from "@components/year-image.css"

export default function YearImage({year, isMobile}) {

  return (
    <div className={styles.year + " " + (isMobile ? styles.mobileMargin : styles.margin)}>
      {year}
    </div>
  )
}
