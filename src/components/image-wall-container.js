import * as React from "react"
import * as styles from "@components/image-wall.css"
import ImageWallImage from "@components/image-wall-image.js"
import YearImage from "@components/year-image.js"
import { isMobileViewport } from '@utils/common.js';
import  useWindowsDimension  from '@hooks/useWindowsDimension';

export default function ImageWallContainer({ designs }) {

  const { width: screenWidth } = useWindowsDimension();
  const isMobile = isMobileViewport(screenWidth);

  function extractYear(date){
    return new Date(date).toLocaleDateString( 'en-gb', { year: 'numeric' })
  };

let currentYear = "2022"
// const regex = /highlighted/gm;
const groupNumber = designs.length/4;
const column1 = groupNumber*1;
const column2 = groupNumber*2;
const column3 = groupNumber*3;
const column4 = groupNumber*4;

function chooseColumn(number){
  switch (number) {
    case number <= column1:
    return 1;
    break;
    case number <= column2:
    return 2;
    break;
    case number <= column3:
    return 3;
    break;
    case number <= column4:
    return 4;
    break;
    default:
    return 5;
  }
}

function checkPageLink(clientSlug, projectSlug, designNode) {
  if (!clientSlug) return false
  if (!projectSlug) return false
  return true
}

return (
  <div className={styles.imageWallContainer}>

    {designs.map((design, index) => {
      var displayImage;
      if (design.node.cleanImage) {
        displayImage = design.node.cleanImage }
      else {
        displayImage = design.node.mainImage
      }

      const THISyear = extractYear(design.node.when);
      if (currentYear !== THISyear){
        currentYear = THISyear;
        return (
          <>
            <YearImage year={THISyear} isMobile={isMobile} />
            <ImageWallImage
              hasPage={checkPageLink(design.node.client?.clientSlug, design.node.slug, design.node)}
              key={design.node.id}
              url={'projects/' + design.node.slug}
              column={chooseColumn(index)}
              expandedHeight={displayImage.resolutions.height}
              highlighted={design.node.highlighted ? design.node.highlighted : false}
              title={design.node.title}
              src={displayImage.url}
              category={"Print"}
              isMobile={isMobile} />
          </>
        )
      }

      return (
        <ImageWallImage
          hasPage={checkPageLink(design.node.client?.clientSlug, design.node.slug, design.node)}
          key={design.node.id}
          url={'projects/' + design.node.slug}
          column={chooseColumn(index)}
          expandedHeight={design.node.mainImage.resolutions.height}
          highlighted={design.node.highlighted ? design.node.highlighted : false}
          title={design.node.title}
          src={displayImage.url}
          category={"Print"}
          isMobile={isMobileViewport(screenWidth)} />
      )
    })
  }
  </div>
  )
}
