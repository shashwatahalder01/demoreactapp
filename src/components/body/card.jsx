import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img className="img" src={props.imgsrc} alt={props.name} />
      <p className="cardtext">{props.text}</p>
    </div>
  );
}
export default Card;
