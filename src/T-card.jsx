import React from "react";

function TCard() {
  return (
    <>
      <div className="tcard">
        <p className="tcard-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sunt
          maiores, quaerat eligendi quisquam labore officiis corporis!
        </p>
        <div className="tdown">
          <img src="./image/men.png" alt="" />
          <h5 className="tcard-title">Bob</h5>
        </div>
      </div>
      <div className="tcard">
        <p className="tcard-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          aut quis omnis officia excepturi eius ratione laudantium quia amet
          commodi.
        </p>
        <div className="tdown">
          <img src="./image/lady.png" alt="" />
          <h5 className="tcard-title">Julie</h5>
        </div>
      </div>
    </>
  );
}

export default TCard;
