import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function EventCard(props) {
    return (
        <div className="event-panel">
            <div className="inner-panel">
                <div className="row">
                    <h4>{props.title}</h4>
                </div>
                <div className="row">
                    <div className="col"><StaticImage src={} /></div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )
}

export default EventCard
