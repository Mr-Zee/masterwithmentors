import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h3 className="card-title">{props.title}</h3>
      <p className="card-desc">{props.desc}</p>
    </div>
  );
}

export default Card;
