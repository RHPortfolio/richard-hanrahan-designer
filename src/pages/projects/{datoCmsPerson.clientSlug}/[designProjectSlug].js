import * as React from 'react';
import { useState, useEffect } from 'react';
import Layout from '@components/layout.js';
import * as layoutStyles from '@components/layout.css';
import * as textStyles from '@utils/text.css';
import { graphql, Link } from "gatsby";
import ImageCarousel from '@components/image-carousel.js';
import FramedImage from '@components/framed-image.js';
import { extractMonthYear, isMobileViewport } from '@utils/common.js';
import useWindowDimensions from '@hooks/useWindowsDimension.js';


export default function Designproject({params, data}) {

// return (<pre>{JSON.stringify(data, null, 4)}</pre>)

  console.log(data)
  const { width: screenWidth } = useWindowDimensions();
  const { project } = data;

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

    getColors(project.mainImage.url);

  }, [project.mainImage.url])

  return (
    <Layout className={layoutStyles.project}>
      <FramedImage screenWidth={screenWidth} src={project.mainImage.url} title={project.title} resolutions={project.mainImage.resolutions}
      dominantColor={project.mainImage.colors[0]} mutedColor={project.mainImage.colors[2].hex + "66"} gradientColor={project.mainImage.colors[1].hex + "66"} colorData={ palette?.dominant_colors}/>
      <div className={isMobileViewport(screenWidth) ? layoutStyles.mobileContainer : layoutStyles.container}>
        <h1 className={textStyles.header + " " + textStyles.colorBlue}>{project.title}</h1>
        <p className={textStyles.subHeader}>{project.client?.name}</p>
        <p>{extractMonthYear(project.when)}</p>
        <p>{project.description}</p>
        {project.tags ? (<ul>{project.tags}</ul>): ""}
        {project.projectLink ? (
            <Link to={project.projectLink}>More Information On The Project</Link>
          ): ""}
          Photographer: {project.photographer ? project.photographer.name : ""}

          Illustrator: {project.illustrator ? project.illustrator.id : "no illustrtor"}
          Video: {project.videoEmbedCode ? project.videoEmbedCode : "no video embed code"}
          External Link to Video: {project.externalVideoLink ? project.externalVideoLink : "no external video link"}
      {project.allImages ? ( <ImageCarousel images={project.allImages} />) : ""}


      </div>
    </Layout>
  )
}

export const query = graphql`
  query projectBySlug($designProjectSlug: String) {
  project: datoCmsDesignProject(slug: { eq: $designProjectSlug }) {
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
      colors {
        red
        green
        blue
        hex
      }
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
