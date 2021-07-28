import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function EventCard(props) {
  const image = getImage(props.image)
  return (
    <div className="event-panel">
      <div className="inner-panel">
        <div className="row">
          <div className="col" style={{minHeight: "500px"}}>
          <GatsbyImage image={image} alt={props.title} loading="lazy" placeholder="blurred" />
          </div>
          <div className="col">
            <div className="row">
              <h4>{props.title}</h4>
            </div>
            <div className="row">
              <span className="date"><strong>Start: </strong>{props.start_date} &nbsp;</span>
              <span className="date"><strong>End: </strong>{props.end_date}</span>
            </div>
            <div className="row">
              <span class="cost"><strong>Cost: &nbsp;</strong> ${props.price}</span>
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
        </div>
      </div>
    </div>
    </div>
  );
}

export default EventCard;
