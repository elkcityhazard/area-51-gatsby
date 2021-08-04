import React from "react";
import { useStaticQuery, graphql} from "gatsby";
import EventCard from './EventCard'

const Events = () => {
  const data = useStaticQuery(query);
  const {allMarkdownRemark: {nodes:markdownRemark}} = data;
  const [value, setValue] = React.useState(0);
  const {title, description, price, startDate, endDate, slug} = markdownRemark[value].frontmatter;
  const {frontmatter:{img:{childImageSharp: {gatsbyImageData}}}} = markdownRemark[value];
  const currentDate = new Date();
  
  return (
    <section className="events" id="events">
      <h3>Events</h3>
      <div className="btn-container">
        { markdownRemark.map((item, index) => {
          const eventDate = new Date(item.frontmatter.startDate);
          if (eventDate >= currentDate) {
            return (
              <button 
                key={index} 
                className={index === value ? "event-btn active-btn" : "event-btn"} 
                onClick={() => {setValue(index)}}
                >
                  {item.frontmatter.title}
                </button>
            )
          } else {
            return (
              null
            )
          }
        })} 
      </div>
        <div className="event-container">
          
            <EventCard title={title} start_date={startDate} end_date={endDate} price={price} description={description} image={gatsbyImageData} slug={slug}/>

          
        </div>
    </section>
  )};
  

const query = graphql`
{
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/data/"}}
    sort: {fields: frontmatter___startDate}
  ) {
    nodes {
      id
      frontmatter {
        date
        description
        endDate
        endTime
        img {
          childImageSharp {
            gatsbyImageData(jpgOptions: {quality: 75}, webpOptions: {quality: 59})
          }
          id
        }
        price
        slug
        startDate
        startTime
        title
      }
    }
  }
}
`

export default Events;
