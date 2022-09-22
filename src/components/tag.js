import * as React from 'react';
import * as styles from '@components/tags.css'

export default function Tag({ tag, textColor, backgroundColor }) {
  return (
    <li className={styles.tag} style={{color: textColor ? textColor : "", backgroundColor: backgroundColor ? backgroundColor: ""}}>
      {tag.content}
    </li>
  )
}
