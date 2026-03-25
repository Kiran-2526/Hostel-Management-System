import React, { useState } from "react";
import "../../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";

const StudentRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    rollNumber: "",
    email: "",
    phone: "",
    roomNumber: "",
    year: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault(); 
  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const { confirmPassword, ...sendData } = formData;

  const res = await fetch("http://localhost:8080/student/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendData)
    });

  const result = await res.text(); 

    if (result === "Registered Successfully") {
      alert("Registration Successful");
      navigate("/loginstudent");
    } else {
      alert(result);
    }
  };

  return (
    <div className="stdlogin">
      <div className="blur-layer"></div>

      <div className="login-box">
        <h2>Student Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <div className="gender-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
              /> Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
              /> Female
            </label>
          </div>

          <input
            type="text"
            name="rollNumber"
            placeholder="Roll Number"
            value={formData.rollNumber}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="roomNumber"
            placeholder="Room Number"
            value={formData.roomNumber}
            onChange={handleChange}
          />

          <input
            type="text"
            name="year"
            placeholder="Year (1,2,3,4)"
            value={formData.year}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

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
