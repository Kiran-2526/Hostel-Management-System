import React, { useState } from "react";
import "../../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const navigate = useNavigate();

  // ✅ hooks must be here (top level)
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");

  // ✅ single submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/student/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rollNumber,
          password,
        }),
      });

      const data = await res.text();

      if (data === "Login Success") {
        alert("Login Success");
        navigate("/StudentDashboard");
      } else {
        alert(data);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="stdlogin">
      <div className="blur-layer"></div>

      <div className="login-box">
        <h2>Student Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Roll Number"
            required
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>

          <button
            type="button"
            style={{ marginLeft: "4%" }}
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </form>

        <Link
          to="/registerstudent"
          style={{ marginTop: "5%", display: "inline-block", color: "white" }}
        >
          New student? <span>Register</span>
        </Link>
      </div>
    </div>
  );
};

export default StudentLogin;
