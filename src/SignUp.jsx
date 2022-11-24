import React from "react";

function SignUp() {
  function saveUser(e) {
    e.preventDefault();
  }
  return (
    <div className="sign-up section">
      <h3>Get a Mentor Now</h3>
      <form>
        <input type="text" id="name" placeholder="Name" />
        <input type="email" id="email" name="email" placeholder="Email" />

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Contact"
          pattern="[0-9]{10}"
          required
        />
        <input
          type="submit"
          className="form-btn"
          id="user-form"
          onClick={(e) => {
            saveUser(e);
          }}
        />
      </form>
    </div>
  );
}

export default SignUp;
