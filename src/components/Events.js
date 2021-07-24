import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import EventCard from './EventCard'



const Events = (props) => {
    const data = useStaticQuery(query);
    const {edges} = data.allStrapiEvent;
    return (
        <section className="events">
            <h3>{props.title}</h3>
            <div className="container">
            {edges.map((event) => {
              console.log(event.node.event_description)
              return <EventCard 
                        key={event.node.id} 
                        title={event.node.title} 
                        image={event.node.event_image.localFile.childImageSharp.gatsbyImageData} 
                        start_date={new Date(event.node.start_date).toLocaleDateString() + ' ' + new Date(event.node.start_date).toLocaleTimeString()} 
                        end_date={new Date(event.node.end_date).toLocaleDateString() + ' ' + new Date(event.node.start_date).toLocaleTimeString()} 
                        price={event.node.price} 
                        description={event.node.event_description.map((desc) => {
                            return desc.event_description
                        })} />    
            })} 
            </div>
        </section>
    )
}

const query = graphql`
{
  allStrapiEvent {
    edges {
      node {
        end_date
        event_description {
          event_description
        }
        id
        start_date
        title
        event_image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                breakpoints: [499, 768, 986 1360,1920]
                width: 500
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        price
      }
    }
  }
}
`

export default Events;