import * as React from "react";
import { Link } from "gatsby";
import '../styles/components/link-btn.scss'


const Card = (props) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-img-container">
          {props.image}
          <h3 style={{
            alignItems: "center",
            color: "#fff",
            position: "relative",
            gridArea: "1/1",
            placeItems: "center",
            display: "grid",
          }}>{props.title}</h3>
        </div>
        <div className="card-content-container">
        <h3>{props.title}</h3>
          <p>{props.text}</p>
          <Link key={props.id} to={props.url}>
          <span>{props.title}</span>
        </Link>

        </div>
      </div>
    </div>
  );
};

export default Card;
