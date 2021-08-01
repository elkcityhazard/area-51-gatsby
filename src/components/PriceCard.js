import * as React from "react";
import '../styles/components/link-btn.scss'
var key = 0;


const PricingCard = (props) => {
    const {title, price, includes, extras, description} = props;
  return (
      <div className="price-card">
          <h3>{title}</h3>
          <span className="price">{price}</span>
          <ul>
              {includes.map((item) => {
                
                  return <li key={key}>{item}</li>
              })
            }
          </ul>
          <span className="extras">{extras}</span>
          <hr style={{color: "black"}} />
          <p className="description">{description}</p>
      </div>
  )
};

export default PricingCard;
