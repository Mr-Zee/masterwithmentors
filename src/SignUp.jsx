import React from "react";

function SignUp() {
  function saveUser(e) {
    e.preventDefault();
  }
  return (
    <div className="sign-up section">
      <h1>Get a Mentor Now</h1>
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
            <input type="radio" value="Mentor" name="mentor" />
            <span>I am a Mentor</span>
          </label>
          <label>
            <input type="radio" value="User" name="user" />
            <span> I Need a Mentor</span>
          </label>
        </div>
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
}

export default SignUp;
