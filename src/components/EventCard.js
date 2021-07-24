import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function EventCard(props) {
  const image = getImage(props.image);
  return (
    <div className="event-panel">
      <div className="inner-panel">
        <div className="row">
          <div className="col">
            <GatsbyImage image={props.image} placeholder="blurred" alt={props.title} />
          </div>
          <div className="col">
            <div className="row">
              <h4>{props.title}</h4>
            </div>
            <div className="row">
              <span className="date"><strong>Start: </strong>{props.start_date}</span>
              <span className="date"><strong>End: </strong>{props.end_date}</span>
            </div>
            <div className="row">
              <strong>Cost: &nbsp;</strong>
              <span> ${props.price}</span>
            </div>
            <div className="row">
                <div className="description">
                <strong>Description: </strong>
                {props.description}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default EventCard;
