import {useState, useEffect} from 'react';
import * as React from 'react';
import * as styles from '@components/framed-image.css';
import * as textStyles from '@utils/text.css';
import usePalette from '@hooks/usePalette';
import { extractHueFromRGB } from '@utils/color.js';

export default function FramedImage({screenWidth, src, title, resolutions, colorData, dominantColor, mutedColor, gradientColor}) {

  function returnImageWidth(width){
    if (width < 600){
      return Math.round(width * 0.45)
    } else {
      return 400;
    }
  }

  // This value works out a suitable hue for the frame to be that would contrast with the image
  // const frameHueAdjust = 21 - extractHueFromRGB(colorData?.vibrant.red, colorData?.vibrant.green, colorData?.vibrant.blue );
  const frameHueAdjust = 21 - extractHueFromRGB(dominantColor.red, dominantColor.green, dominantColor.blue );

  // Establishes width and height according to native aspect ratio of image
  const width=returnImageWidth(screenWidth);
  const calculatedHeight = Math.round(width/resolutions.aspectRatio, 0);
  const imgParams = "?&crop=faces,top&fit=crop&w=" + width;
  const outerFrameBackgroundImage = "url(https://www.datocms-assets.com/79085/1662851920-wooden-frame-bg.jpg?fit=scale&w=600&rot=90&hue="+ frameHueAdjust+")"

  const backgroundImage1 = { height: "calc(" + calculatedHeight + "px)", backgroundImage: "-webkit-image-set(url('" +
    src + imgParams + "&dpr=1') 1x, url('" +
    src + imgParams + "&dpr=2') 2x, url('" +
    src + imgParams + "&dpr=3') 3x"}

  // Background Color uses 8 digit hex notation to provide opacity
  return (
    <div style={{background: "url(https://www.datocms-assets.com/79085/1663182985-white-concrete-wall.jpg?w=600)", width: "100%", zIndex: "-101", position: "relative"}}>
      <div style={{background: "linear-gradient(141deg," + mutedColor + " 0.00%, " + gradientColor + " 100.00%)", width: "100%", zIndex: "-100", position: "relative", padding: "3vh",
  }}>
        <div className={styles.outerFrame} style={{background: outerFrameBackgroundImage, opacity: 1, marginTop: "15vh", width: "calc(" + width + "px + 18vw)", height: "calc(" + calculatedHeight + "px + 18vw)"}}>
          <div className={styles.mount} style={{opacity: 1, width: "calc(" + width + "px + 12vw)", height: "calc(" + calculatedHeight + "px + 12vw)"}}>
            <div className={styles.framedImage} style={backgroundImage1} >
          </div>
        </div>
      </div>
    </div>
  </div>)
}
