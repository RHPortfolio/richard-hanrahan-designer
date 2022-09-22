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
import TagsContainer from '@components/tags-container';
import DetailField from '@components/detail-field';
import MoreImagesCarousel from '@components/more-images-carousel';

export default function DesignPage({params, data}) {

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

  }, [page.mainImage.url])

  // console.log('tags', page.tags)

  // <BannerImage src={page.mainImage.url} title={page.title} alt={page.title} photographer={page.photographer ? page.photographer.name : ""} />
  return (
    <Layout className={layoutStyles.page}>
      <FramedImage screenWidth={screenWidth} src={page.mainImage.url} title={page.title} resolutions={page.mainImage.resolutions}
      dominantColor={page.mainImage.colors[0]} mutedColor={page.mainImage.colors[2].hex + "66"} gradientColor={page.mainImage.colors[1].hex + "66"} colorData={ palette?.dominant_colors}/>
      <div className={isMobileViewport(screenWidth) ? layoutStyles.mobileContainer : layoutStyles.container}>
        <h1 className={textStyles.header + " " + textStyles.colorBlue}>{page.title}</h1>
        <p className={textStyles.subHeader}>{page.client?.name}</p>
        <p>{extractMonthYear(page.when)}</p>
        <p>{page.description}</p>

        { page.tags ? (<TagsContainer tags={page.tags} backgroundColor={page.mainImage.colors[0]} />) : ""}

        {page.projectLink ? (
            <DetailField link={page.projectLink} content="More Information On The Project" />
          ): ""}

        {page.photographer ? (<DetailField link={page.photographer.link} category={"Photographer"} content={page.photographer.name} />): ""}

        {page.illustrator ? (<DetailField link={page.illustrator.link} category={"Illustrator"} content={page.illustrator.name} />): ""}

        {page.videoEmbedCode ? (page.videoEmbedCode): ""}

        {page.externalVideoLink ? (<DetailField link={page.externalVideoLink}  content={"Link to External Video"} />): ""}

        {page.allImages ? ( <MoreImagesCarousel imageData={page.allImages} />) : ""}

      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
  datoCmsDesignProject(id: { eq: $id }) {
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
