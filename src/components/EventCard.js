import React from 'react'
import {GatsbyImage, getImage} from "gatsby-plugin-image"

function EventCard(props) {
    const image = getImage(props.image)
    return (
        <div className="event-panel">
            <div className="inner-panel">
                <div className="row">
                    <h4>{props.title}</h4>
                </div>
                <div className="row">
                    <div className="col"><GatsbyImage image={props.image} /></div> 
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )
}

export default EventCard;
