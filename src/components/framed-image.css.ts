import { style, styleVariants } from "@vanilla-extract/css"

export const mount = style({
  padding: '6vw',
  backgroundImage: "-webkit-image-set(url('https://www.datocms-assets.com/79085/1662932817-paper_texture.jpg?fit=scale&w=600&rot=90&dpr=1') 1x, url('https://www.datocms-assets.com/79085/1662932817-paper_texture.jpg?fit=scale&w=600&rot=90&dpr=2') 2x, url('https://www.datocms-assets.com/79085/1662932817-paper_texture.jpg?fit=scale&w=600&rot=90&dpr=3') 3x)",
  backgroundImage: "image-set(url('https://www.datocms-assets.com/79085/1662932817-paper_texture.jpg?fit=scale&w=600&rot=90&dpr=1') 1x, url('https://www.datocms-assets.com/79085/1662932817-paper_texture.jpg?fit=scale&w=600&rot=90&dpr=2') 2x, url('https://www.datocms-assets.com/79085/1662932817-paper_texture.jpg?fit=scale&w=600&rot=90&dpr=3') 3x)",
  boxShadow: "inset 0px 0px 20px 10px rgb(0 0 0 / 60%)"
});


export const framedImage = style({
  position: "relative",
  boxShadow: 'inset 0px 0px 20px 3px rgb(0 0 0 / 60%)',
})

export const outerFrame = style({
  position: "relative",
  margin: "0 auto",
  zIndex: "-1",
  padding: "3vw",
  boxShadow: "0px 0px 10px 3px rgb(0 0 0 / 60%)"
})

// export function determineBackgroundImage(src, imgParams) {
//   const innerFrame = style({
//     backgroundImage: "-webkit-image-set(url('" +
//         src + imgParams + "&dpr=1') 1x, url('" +
//         src + imgParams + "&dpr=2') 2x, url('" +
//         src + imgParams + "&dpr=3') 3x",
//     backgroundImage: "image-set( url('" +
//       src + imgParams + "&dpr=1') 1x, url('" +
//       src + imgParams + "&dpr=2') 2x, url('" +
//       src + imgParams + "&dpr=3') 3x;"
//   })

//   return innerFrame
// }
