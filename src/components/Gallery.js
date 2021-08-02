import React from 'react'
import {graphql, useStaticQuery} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image'
import {FaTimes} from 'react-icons/fa'

const Gallery = () => {
    const data = useStaticQuery(query);
    const [active, setActive] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    const {allFile: {nodes}} = data;
    const {childImageSharp: {gatsbyImageData}} = nodes[index]
    
    return (
        <section className="gallery">
            <h3>Gallery</h3>
            <div className={active === true ? 'fullscreen' : 'closed'} onClick={() => setActive(false)}>
                <GatsbyImage 
                key={index} 
                className={active === true ? "fullscreen-img show-img" : "fullscreen-image"} 
                image={gatsbyImageData} />
            <button onClick={() => setActive(false)}><FaTimes size="40" /></button>
            </div>
            <div className="image-container">
                {
                   nodes.map((item, index) => {
                      return (<GatsbyImage key={index} className="gallery-img" image={item.childImageSharp.gatsbyImageData} onClick={() => {
                          setIndex(index)
                          setActive(true)
                      }}/>
                      )
                   })
                }
            </div>
        </section>
    )
}

const query = graphql`
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
