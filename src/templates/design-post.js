// import * as React from 'react';
// import Layout from '../../../components/layout.js';
// import * as layoutStyles from '../../../components/layout.css';
// import * as textStyles from '../../../utils/text.css';
// import { graphql, useStaticQuery, Link } from "gatsby";
// import BannerImage from '../../../components/banner-image.js';
// import ImageCarousel from '../../../components/image-carousel.js';
// import { extractMonthYear } from '../../../utils/common.js';
//
//
// const data = graphql`
//   query($slug: String) {
//   datoCmsDesignProject(slug: {current: { eq: $slug}}) {
//     id
//     slug
//     when
//     title
//     tags
//     projectLink
//     photographer {
//       id
//       name
//     }
//     mainImage {
//       url
//     }
//     client{
//       name
//     }
//     description
//     illustrator {
//       id
//     }
//     videoEmbedCode
//     externalVideoLink
//     allImages {
//       url
//       title
//       resolutions {
//         height
//         width
//         aspectRatio
//       }
//     }
//   }
// }
// `)
//
// export default function DesignPost(data) {
//
//     const {datoCmsDesignProject: page} = data;
//
//     return (
//       <Layout className={layoutStyles.page}>
//         <BannerImage src={page.mainImage.url} title={page.title} alt={page.title} photographer={page.photographer.name} />
//         <div className={layoutStyles.container}>
//           <h1 className={textStyles.header + " " + textStyles.colorBlue}>{page.title}</h1>
//           <p className={textStyles.subHeader}>{page.client?.name}</p>
//           <p>{extractMonthYear(page.when)}</p>
//           <p>{page.description}</p>
//           {page.tags ? (<ul>{page.tags}</ul>): ""}
//           {page.projectLink ? (
//               <Link to={page.projectLink}>More Information On The Project</Link>
//             ): ""}
//             Photographer: {page.photographer ? page.photographer.name : ""}
//
//             Illustrator: {page.illustrator ? page.illustrator.id : "no illustrtor"}
//             Video: {page.videoEmbedCode ? page.videoEmbedCode : "no video embed code"}
//             External Link to Video: {page.externalVideoLink ? page.externalVideoLink : "no external video link"}
//         {page.allImages ? ( <ImageCarousel images={page.allImages} />) : ""}
//         </div>
//       </Layout>
//     )
//   }



import * as React from 'react';
import { useState, useEffect } from 'react';
import Layout from '@components/layout.js';
import * as layoutStyles from '@components/layout.css';
import * as textStyles from '@utils/text.css';
import { graphql, Link } from "gatsby";
import BannerImage from '@components/banner-image.js';
import ImageCarousel from '@components/image-carousel.js';
import FramedImage from '@components/framed-image.js';
import { extractMonthYear, isMobileViewport } from '@utils/common.js';
import useWindowDimensions from '@hooks/useWindowsDimension.js';

const query = graphql`
  query($slug: String) {
  datoCmsDesignProject(slug: { eq: $slug}) {
    id
    slug
    when
    title
    tags
    projectLink
    photographer {
      id
      name
    }
    mainImage {
      url
      resolutions {
        height
        width
        aspectRatio
      }
    }
    client{
      name
    }
    description
    illustrator {
      id
    }
    videoEmbedCode
    externalVideoLink
    allImages {
      url
      title
      resolutions {
        height
        width
        aspectRatio
      }
    }
  }
}
`


export default function DesignPost({params, data}) {

  const { width: screenWidth } = useWindowDimensions();
  const { datoCmsDesignProject: page} = data;

  const [palette, setPalette] = useState({});

  useEffect(() => {

    function getColors(imageSRC) {

      const options = {method: 'GET'};
      const adjustedURL = imageSRC+'&palette=json'

      fetch(adjustedURL, options)
        .then(response => response.json())
        .then(response => setPalette(response))
        .catch(err => console.error(err));

    }

    getColors(page.mainImage.url);

  }, [])

  // <BannerImage src={page.mainImage.url} title={page.title} alt={page.title} photographer={page.photographer ? page.photographer.name : ""} />
  return (
    <Layout className={layoutStyles.page}>
      <FramedImage screenWidth={screenWidth} src={page.mainImage.url} title={page.title} resolutions={page.mainImage.resolutions} colorData={ palette?.dominant_colors}/>
      <div className={isMobileViewport(screenWidth) ? layoutStyles.mobileContainer : layoutStyles.container}>
        <h1 className={textStyles.header + " " + textStyles.colorBlue}>{page.title}</h1>
        <p className={textStyles.subHeader}>{page.client?.name}</p>
        <p>{extractMonthYear(page.when)}</p>
        <p>{page.description}</p>
        {page.tags ? (<ul>{page.tags}</ul>): ""}
        {page.projectLink ? (
            <Link to={page.projectLink}>More Information On The Project</Link>
          ): ""}
          Photographer: {page.photographer ? page.photographer.name : ""}

          Illustrator: {page.illustrator ? page.illustrator.id : "no illustrtor"}
          Video: {page.videoEmbedCode ? page.videoEmbedCode : "no video embed code"}
          External Link to Video: {page.externalVideoLink ? page.externalVideoLink : "no external video link"}
      {page.allImages ? ( <ImageCarousel images={page.allImages} />) : ""}


      </div>
    </Layout>
  )
}
