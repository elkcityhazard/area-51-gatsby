import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {getImage, GatsbyImage} from 'gatsby-plugin-image';
import { convertToBgImage} from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import HeaderData from './HeaderData';

const GbiBridged = ({children}) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
     query {
      placeholderImage: file(relativePath: {regex: "/paintball-in-forest-1080/"}) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 1080
          webpOptions: {quality: 75}
          jpgOptions: {quality: 75}
          placeholder: BLURRED
          sizes: "250, 768, 968, 1360, 1920"
          
        )
      }
    }
  }
`
  )
 const image = getImage(placeholderImage);
  const bgImage = convertToBgImage(image)
  console.log(bgImage)
  return (
    <BackgroundImage 
    Tag="div" 
    {...bgImage} 
    // preserveStackingContext
    >
      <div>
      {children}
      </div>
      
    </BackgroundImage>
  )
}






export default GbiBridged;