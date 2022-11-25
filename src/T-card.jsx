import React from "react";

function TCard(props) {
  return (
    <div className="tcard">
      <p className="tcard-desc">{props.title}</p>
      <div className="tdown">
        <img src={props.img} alt="" />
        <h5 className="tcard-title">{props.name}</h5>
      </div>
    </div>
  );
}

export default TCard;
