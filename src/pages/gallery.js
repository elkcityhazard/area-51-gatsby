import React from "react"
import SEO from '../components/SEO'
import {graphql, useStaticQuery} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image'
import {FaTimes} from 'react-icons/fa'
import PageLayout from '../components/PageLayout'

const meta = {
  title: "Area 51 Paintball - Gallery",
  description: "Area 51 Paintball is the premier paintball facility in Northern Michigan. We are located in Mancelona, Michigan. The best paintball experience is ensured by our professional staff who have years of experience hosting paintball matches.",
  image: '/images/area-51-logo.jpg',
  pathname: '/gallery'

}

const Gallery = () => {
    const data =  useStaticQuery(query);
    const [active, setActive] =  React.useState(false);
    const [index, setIndex] =   React.useState(0);
    const {allFile: {nodes}} = data;
    const {childImageSharp: {gatsbyImageData}} = nodes[index]
    return (
      <>
        <PageLayout>
        <SEO
      title={meta.title}
      description={meta.description || 'Wooded Paintball located near Mancelona, Micigan'}
      image={meta.image}
      pathname={meta.pathname}
      article
    />
            <section className="gallery">
            <h3>Gallery</h3>
            <div className={active === true ? 'fullscreen' : 'closed'}>
                <GatsbyImage role="button"
                key={index} 
                className={active === true ? "fullscreen-img show-img" : "fullscreen-image"} 
                image={gatsbyImageData}
                 />
            <button aria-label="close large image" onClick={() => setActive(false)}><FaTimes size="40" /></button>
            </div>
            <div className="image-container" aria-label="image container">
                {
                   nodes.map((item, index) => {
                      return (<GatsbyImage key={index} role="button"  className="gallery-img" image={item.childImageSharp.gatsbyImageData} onClick={() => {
                          setIndex(index)
                          setActive(true)
                      }}/>
                      )
                   })
                }
            </div>
        </section>
        </PageLayout>
        </>
    )
}

export const query = graphql`
  {
    allFile(filter: {ext: {eq: ".jpg"}, relativePath: {regex: "/area-51-custom/"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            width: 968
            webpOptions: {quality: 50}
            jpgOptions: {quality: 75}
            placeholder: BLURRED
            breakpoints: [350, 768, 968, 1360, 1920]
          )
        }
      }
    }
  }
`

export default Gallery


