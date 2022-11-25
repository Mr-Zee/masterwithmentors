import React from "react";

function Footer() {
  return (
    <>
      <div className="footer section">
        <div className="map">
          <a href="https://www.google.com/maps/place/Hanoi,+Ho%C3%A0n+Ki%E1%BA%BFm,+Hanoi,+Vietnam/@21.022736,105.801944,13z/data=!3m1!4b1!4m5!3m4!1s0x3135ab9bd9861ca1:0xe7887f7b72ca17a9!8m2!3d21.0277644!4d105.8341598">
            <img src="./image/map.webp" alt="" />
          </a>
        </div>
        <div className="contact">
          <p>
            12nd Floor <br />
            ABC building <br />
            2nd street <br />
            Hanoi <br />
            Vietnam <br />
            +171 765 876 654 <br />
            mentor@mail.com
          </p>
        </div>
      </div>

      <p className="copyright">Copyright 2022</p>
    </>
  );
}

export default Footer;
