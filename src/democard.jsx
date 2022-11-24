import React from "react";
import logo from "./image/img.webp";

function Card() {
  const profileData = [
    {
      id: "1",
      title: "Life Coach",
      desc: "You can choose life of coach that best suits your needs",
      img: { logo },
    },
    {
      id: "2",
      title: "Career Coach",
      desc: "You can choose life of coach that best suits your needs",
      img: { logo },
    },
    {
      id: "3",
      title: "Spiritual Coach",
      desc: "You can choose life of coach that best suits your needs",
      img: { logo },
    },
    {
      id: "4",
      title: "Physical Coach",
      desc: "You can choose life of coach that best suits your needs",
      img: { logo },
    },
    {
      id: "5",
      title: "Relationship Coach",
      desc: "You can choose life of coach that best suits your needs",
      img: { logo },
    },
  ];
  return (
    <>
      {profileData.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div>
              <div>
                <img src={item.img} alt="" className="profileImage" />
              </div>
              <div className="card-title">
                <h3>{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
