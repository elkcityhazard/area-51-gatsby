import React from 'react'
import { StaticImage, getImage } from 'gatsby-plugin-image'

function EventCard(props) {
    const imageData = getImage(props.image)
    return (
        <div className="event-panel">
            <div className="inner-panel">
                <div className="row">
                    <h4>{props.Title}</h4>
                </div>
                <div className="row">
                    <div className="col"><StaticImage src={props.image} /></div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )
}

export default EventCard
