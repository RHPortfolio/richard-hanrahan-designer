import * as React from "react"
import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import * as sections from "../components/sections"
// import Fallback from "../components/fallback"

export default function About(props) {
  // const { aboutPage } = props.data

  return (
    <div>
    This is the about page

    </div>
  )
}
// {aboutPage.blocks.map((block) => {
//   const { id, blocktype, ...componentProps } = block
//   const Component = sections[blocktype] || Fallback
//   return <Component key={id} {...componentProps} />
// })}


// export const query = graphql`
//   {
//     aboutPage {
//       id
//       title
//       description
//       image {
//         id
//         url
//       }
//       blocks: content {
//         id
//         blocktype
//         ...AboutHeroContent
//         ...AboutStatListContent
//         ...HomepageProductListContent
//         ...AboutLeadershipContent
//         ...HomepageBenefitListContent
//         ...AboutLogoListContent
//         ...HomepageCtaContent
//       }
//     }
//   }
// `
