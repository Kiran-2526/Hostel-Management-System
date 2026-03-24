import React from "react";
import "../../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";

const StudentRegister = () => {
  const navigate = useNavigate();

  return (
    <div className="stdlogin">
      <div className="blur-layer"></div>

      <div className="login-box">
        <h2>Student Register</h2>

        <form>
          <input type="text" placeholder="Full Name" required />
          <div className="gender-group">
            <label>
              <input type="radio" name="gender" /> Male
            </label>

            <label>
              <input type="radio" name="gender" /> Female
            </label>
          </div>
          <input type="text" placeholder="Roll Number" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="Room Number" />
          <input type="text" placeholder="Year (1,2,3,4)" />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit">Register</button>

          <button
            type="button"
            style={{ marginLeft: "4%" }}
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </form>

        <p style={{ marginTop: "10px" }}>
          Already have account?
          <Link to="/loginstudent">
            <span> Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default StudentRegister;
