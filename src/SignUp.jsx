import React, { forwardRef } from "react";

const SignUp = forwardRef((props, ref) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [experience, setExperience] = React.useState(0);
  const [isMentor, setIsMentor] = React.useState(false);

  function saveUser(e) {
    e.preventDefault();
  }
  return (
    <div ref={ref} className="sign-up section">
      <h1>Get Connect With Our Best Mentors</h1>
      <form>
        <input type="text" id="name" placeholder="Name" className="input" />
        <input
          type="email"
          id="email"
          name="email"
          className="input"
          placeholder="Email"
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          className="input"
          placeholder="Contact"
          pattern="[0-9]{10}"
          required
        />
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Mentor"
              name="mentor"
              onClick={(e) => {
                setIsMentor(true);
              }}
              checked={isMentor}
            />
            <span>I am a Mentor</span>
          </label>
          <label>
            <input
              type="radio"
              value="User"
              name="user"
              onClick={(e) => {
                setIsMentor(false);
              }}
              checked={!isMentor}
            />
            <span> I Need a Mentor</span>
          </label>
        </div>
        {isMentor ? (
          <input type="number" placeholder="Experience" className="input" />
        ) : null}
        <input
          type="submit"
          className="form-btn"
          id="user-form"
          onClick={(e) => {
            saveUser(e);
          }}
        />
      </form>
      <div class="line">
        <div class="small-line"></div>
      </div>
    </div>
  );
});

export default SignUp;
