import React from "react";
import Card from "./Card";

function Cards() {
  const items = [
    {
      title: "Career Coach",
      desc: "Need a assist for your Career Guidance ,Get in Touch with Us",
      img: "./image/icon.png",
    },
    {
      title: "spiritual Coach",
      desc: "Makes Your Dreams Into Reality",
      img: "./image/icon2.png",
    },
    {
      title: "Life Coach",
      desc: "Is you Stuck Inside your Comfort Zone ??.. Meet With Our Mentor",
      img: "./image/icon.png",
    },
    {
      title: "Physical coach",
      desc: " PUSH  UP Your limit To Extra Ordinary",
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
