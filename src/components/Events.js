import React from "react";
import { StaticQuery, graphql } from "gatsby";
import EventCard from './EventCard'

const Events = () => (
  <StaticQuery
    query={graphql`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data/"}}) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              price
              slug
              startDate
              endDate
              startTime
              endTime
              img {
                childImageSharp {
                  gatsbyImageData(jpgOptions: {quality: 75}, webpOptions: {quality: 50})
                }
              }
            }
            html
          }
        }
      }
    }
  `}
    render={(data) => {
      const { allMarkdownRemark } = data;
      const { edges } = allMarkdownRemark;
      
      return (
        <section className="events" id="events">
          <h3>Events</h3>
          {
            edges.map((edge) => {
              const {title, description, price, startTime, endTime, startDate, endDate} = edge.node.frontmatter;
              const featuredImage = edge.node.frontmatter.img.childImageSharp.gatsbyImageData;
              console.log(featuredImage)
              return(
                <EventCard title={title} start_date={startDate} end_date={endDate} price={price} description={description} image={featuredImage}/>
              )
            })
          }
        </section>
      );
    }}
  ></StaticQuery>
);

export default Events;
