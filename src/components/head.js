import * as React from "react"
import { Helmet } from "react-helmet"
import logo from "@assets/chumchi_design_logo.svg"

export default function Head({ title = "ChumChi", description = "The Graphic Design of Richard Hanrahan", image }) {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en-us",
      }}
    >
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="prefetch" href={logo} as="image" type="image/svg+xml"/>

      {description && (
        <meta
          name="description"
          property="og:description"
          content={description}
        />
      )}
      <meta property="og:title" content={title} />
      {image && <meta property="og:image" content={image.url} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image.url} />}
    </Helmet>
  )
}
