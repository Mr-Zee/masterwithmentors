import React from "react";
import TCard from "./T-card";

function Testimonial() {
  const items = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibusaut quis omnis officia excepturi eius ratione laudantium quia ametcommodi.   ",
      name: "Bob",
      img: "./image/men.png",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibusaut quis omnis officia excepturi eius ratione laudantium quia ameth",
      name: "Julie",
      img: "./image/lady.png",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibusaut quis omnis officia excepturi eius ratione laudantium quia amet ",
      name: "jack",
      img: "./image/men.png",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibusaut quis omnis officia excepturi eius ratione laudantium quia amet",
      name: "jean",
      img: "./image/lady.png",
    },
  ];
  return (
    <div className="tcards section">
      <h1>Let's Hear From Our Learners</h1>
      <div className="tlists">
        {items.map((item) => (
          <TCard title={item.title} name={item.name} img={item.img} />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
