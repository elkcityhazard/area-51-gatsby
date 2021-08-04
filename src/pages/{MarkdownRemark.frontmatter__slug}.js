import React from "react"
import { graphql } from "gatsby"
import {GatsbyImage} from 'gatsby-plugin-image'
import PageLayout from '../components/PageLayout'
import SEO from '../components/SEO'



export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const {gatsbyImageData} = frontmatter.img.childImageSharp;
  return (
    <PageLayout>
      <SEO
      title={frontmatter.title}
      description={frontmatter.description|| 'Wooded Paintball located near Mancelona, Micigan'}
      image={frontmatter.image}
      pathname={frontmatter.slug}
      article
    />
<GatsbyImage image={gatsbyImageData} loading="lazy" placeholder="blurred" alt={frontmatter.title} />
<div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
                <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </PageLayout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        img {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`