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
        <input type="text" id="designation" placeholder="Designation" />
        <input type="text" id="experience" placeholder="Experience" />
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

      <h3>Become a Menotor</h3>
      <form>
        <input type="text" id="name" placeholder="Name" />
        {/* <label for="mentor">mentor</label> */}
        <select id="work" name="mentor">
          <option value="life-coach">Life Coach</option>
          <option value=" relationship-coach"> Relationship Coach</option>
          <option value="career-coach">Career Coach</option>
          <option value="spirituality-coach">Spirituality Coach</option>
        </select>
        <input type="text" id="experience" placeholder="Experience" />
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Contact"
          pattern="[0-9]{10}"
          required
        />
        <input
          clas
          type="submit"
          className="form-btn"
          id="coach-form"
          value="Save"
          onClick={(e) => {
            saveUser(e);
          }}
        />
      </form>
    </div>
  );
}

export default SignUp;
