import * as React from 'react';
import * as styles from '@components/banner-image.css';
import * as textStyles from '@utils/text.css';

export default function BannerImage({src, title, photographer}) {

  const imgParams = "?auto=format&crop=faces,top&w=500&h=500&fit=crop";

  return (
    <>
      <img
        className={styles.bannerImage}
        srcSet={src + imgParams + "&dpr=1 1x," + src + imgParams + "&dpr=2 2x," + src + imgParams + "&dpr=3 3x,"}
        src={src + imgParams}
        title={title}
        alt={title + ", created by Richard Hanrahan"} />
        {photographer ? ( <p className={styles.caption + " " + textStyles.colorBlue}>© {photographer}</p> ) : ""}
    </>)
}
