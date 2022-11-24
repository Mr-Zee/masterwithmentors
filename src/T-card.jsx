import React from "react";

function TCard() {
  return (
    <>
      <div className="tcard">
        <p className="tcard-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing..
        </p>
        <div className="tdown">
          <img src="./image/men.png" alt="" />
          <h5 className="tcard-title">Name</h5>
        </div>
      </div>
      <div className="tcard">
        <p className="tcard-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
        <div className="tdown">
          <img src="./image/lady.png" alt="" />
          <h5 className="tcard-title">Name</h5>
        </div>
      </div>
    </>
  );
}

export default TCard;
