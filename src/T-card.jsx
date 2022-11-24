import React from "react";

function TCard() {
  return (
    <>
      <div className="tcard">
        <p className="tcard-desc">Title desc</p>
        <h5 className="tcard-title">Name</h5>
        <img src="./image/men.png" alt="" />
      </div>
      <div className="tcard">
        <p className="tcard-desc">Title desc</p>
        <img src="./image/lady.png" alt="" />
        <h5 className="tcard-title">Name</h5>
      </div>
    </>
  );
}

export default TCard;
