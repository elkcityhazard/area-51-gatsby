import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import EventCard from './EventCard'


const Events = (props) => {
    const data = useStaticQuery(query);
    const {nodes} = data.allStrapiEvent;
    console.log(nodes);
    return (
        <section className="events">
            <h3>{props.title}</h3>
            <div className="container">
            {nodes.map((event) => {
                return <EventCard Title={event.Title} image={event.image}  />
            })}
            </div>
        </section>
    )
}

const query = graphql`
  {
    allStrapiEvent {
      nodes {
        Title
        end_date
        event_cost
        start_date
        published_at
        event_cover_image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 10, webpOptions: {quality: 50}, quality: 70)
            }
          }
        }
        event_description {
          description
        }
      }
    }
  }
`

export default Events;