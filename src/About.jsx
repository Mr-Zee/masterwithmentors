import React, { useRef } from "react";

function About() {
  const paraRef = useRef(null);
  const executeScroll = () => {
    console.log("clicked");
    paraRef.current.scrollIntoView();
  };
  return (
    <div className="about section">
      <h2 onClick={executeScroll}>About</h2>
      <p ref={paraRef}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, dolore
        earum blanditiis voluptas eveniet obcaecati id laboriosam totam atque
        neque, adipisci excepturi, error voluptates suscipit ratione facilis
        odio iure. Explicabo architecto cum debitis et doloribus, veniam
        expedita quod deleniti molestiae optio. At quasi vitae nostrum quis
        optio enim temporibus fugit, tenetur impedit excepturi. Maiores, neque!
      </p>
    </div>
  );
}

export default About;
