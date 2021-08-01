import React from "react";
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function EventCard(props) {
  const startDate = new Date(props.start_date);
  const endDate = new Date(props.end_date)
  const image = getImage(props.image)
  return (
    <div className="event-panel">
      <div className="inner-panel">
        <div className="row">
          <div className="col" style={{minHeight: "500px"}}>
            <Link to={props.slug}>

          <GatsbyImage image={image} alt={props.title} loading="lazy" placeholder="blurred" />
            </Link>
          </div>
          <div className="col">
            <div className="row">
              <h4>{props.title}</h4>
            </div>
            <div className="row">
              <span className="date"><strong>Start: </strong>{startDate.toLocaleDateString()} &nbsp;</span>
              <span className="date"><strong>End: </strong>{endDate.toLocaleDateString()}</span>
            </div>
            <div className="row">
              <span class="cost"><strong>Cost: &nbsp;</strong> {props.price}</span>
            </div>
             <div className="row" style={{
              flexDirection: "column",
              justifyContent: "flex-start"
              }}>
                <strong>Description: </strong>
                <div className="description">
                {props.description}
            </div>
          </div> 
          <div className="row">
            <Link to={props.slug} className="learn-more">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default EventCard;
