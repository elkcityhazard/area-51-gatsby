import * as React from "react";
import '../styles/components/link-btn.scss'


const PricingCard = (props) => {
    const {title, price, includes, extras, description} = props;
  return (
      <div className="price-card">
          <h3>{title}</h3>
          <span className="price">{price}</span>
          <ul>
              {includes.map((item, index) => {
                
                  return <li key={index}>{item}</li>
              })
            }
          </ul>
          <span className="extras"><strong>Extras: </strong>{extras}</span>
          <p className="description"><strong>Description: </strong>{description}</p>
      </div>
  )
};

export default PricingCard;
