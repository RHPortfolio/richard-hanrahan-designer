import * as React from "react"
import * as styles from "@components/year-image.css"

export default function YearImage({year}) {

  return (
    <div className={styles.year}>
      {year}
    </div>
  )
}
