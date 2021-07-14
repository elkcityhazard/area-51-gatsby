import * as React from "react";
import { Link } from "gatsby";
import '../styles/components/link-btn.scss'


const PricingCard = (props) => {
    const {title, price, includes, extras, description} = props;
  return (
      <div className="price-card">
          <h3>{title}</h3>
          <span className="price">{price}</span>
          <ul>
              {includes.map((item) => {
                  return <li>{item}</li>
              })
            }
          </ul>
          <span className="extras">{extras}</span>
          <p>{description}</p>
      </div>
  )
};

export default PricingCard;
