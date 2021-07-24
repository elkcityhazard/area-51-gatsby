import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const GbiBridged = ({children}) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
    query {
        placeholderImage: file(relativePath: {eq: "male-paintball-player.jpg"}) {
          id
          childImageSharp {
            gatsbyImageData(width: 1920, quality: 50, webpOptions: {quality: 70})
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)

  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      <div style={{
          backgroundImage: "linear-gradient(.25turn, rgba(0,0,0,0.75), rgba(0,0,0,0.75)",
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
          }}>
        {children}
      </div>
    </BackgroundImage>
  )
}
export default GbiBridged