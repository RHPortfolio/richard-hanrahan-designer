import * as React from 'react'
import * as styles from '@components/tags.css'
import Tag from '@components/tag'

export default function TagsContainer ({ tags, textColor, backgroundColor }){
  console.log('tags here', JSON.parse(tags))
  return (
    <ul className={styles.container}>
      {JSON.parse(tags).map((tag) =>{
        return(
          <Tag tag={{ content: tag }} textColor={textColor} backgroundColor={backgroundColor} />
        )
      })}
    </ul>
  )
}
