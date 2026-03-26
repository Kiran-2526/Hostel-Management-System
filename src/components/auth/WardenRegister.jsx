import React, { useState } from "react";
import "../../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";

const WardenRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    wardenId: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const { confirmPassword, ...sendData } = formData;

    const res = await fetch("http://localhost:8080/warden/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    });
    const result = await res.text();

    if (result === "Registered Successfully") {
      alert("Registered Successfully");
      navigate("/loginwarden");
    } else {
      alert(result);
    }
  };

  return (
    <div className="stdlogin">
      <div className="blur-layer"></div>

      <div className="login-box">
        <h2>Warden Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />
          <div className="gender-group">
            <label>
              <input type="radio" name="gender" onChange={handleChange} /> Male
            </label>

            <label>
              <input type="radio" name="gender" onChange={handleChange} />{" "}
              Female
            </label>
          </div>
          <input
            type="text"
            name="wardenId"
            placeholder="Warden ID"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            onChange={handleChange}
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

        <Link to="/loginstudent" className="login-btn-bottom">
          Already have account? Login
        </Link>
      </div>
    </div>
  );
};

export default WardenRegister;
