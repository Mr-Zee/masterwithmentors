import React from "react";

function Card() {
  return (
    <>
      <div className="card">
        <img src="./image/icon.png" alt="" />
        <h3 className="card-title">Life Coach</h3>
        <p className="card-desc">
          You can choose life of coach that best suits your needs
        </p>
      </div>
      <div className="card">
        <img src="./image/icon2.png" alt="" />
        <h3 className="card-title">career Coach</h3>
        <p className="card-desc">
          You can choose life of coach that best suits your needs
        </p>
      </div>
    </>
  );
}

export default Card;
