import React from "react";
import Card from "./Card";

function Cards() {
  const items = [
    {
      title: "coach",
      desc: "asugad kjdghd",
      img: "./image/icon.png",
    },
    {
      title: "spiritual Coach",
      desc: "asugad kjdghd",
      img: "./image/icon2.png",
    },
    {
      title: "Life Coach",
      desc: "asugad kjdghd",
      img: "./image/icon.png",
    },
    {
      title: "Physical coach",
      desc: "asugad kjdghd",
      img: "./image/icon2.png",
    },
  ];
  return (
    <div className="cards section">
      {items.map((item) => (
        <Card title={item.title} desc={item.desc} img={item.img} />
      ))}
      <div class="line">
        <div class="small-line"></div>
      </div>
    </div>
  );
}

export default Cards;
