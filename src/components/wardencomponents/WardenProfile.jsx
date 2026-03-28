import React, { useEffect, useState } from "react";
import "./../../styles/profile.css";
import { useNavigate } from "react-router-dom";

const WardenProfile = () => {
  const [data, setData] = useState({});
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const roll = localStorage.getItem("wardenId");

  // Fetch profile
  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await fetch(`http://localhost:8080/warden/profile/${roll}`);
        const result = await res.json();
        setData(result);
      } catch (error) {
        alert("Failed to load profile",error);
      }
    };

    if (roll) getProfile();
  }, [roll]);

  // Handle input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Update profile
  const handleUpdate = async () => {
    try {
      console.log("Sending:", data);

      const res = await fetch(`http://localhost:8080/warden/profile/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert("Profile Updated Successfully");
        setEdit(false);
      } else {
        alert("Update failed");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating profile");
    }
  };

  return (
    <div className="profile-container">

      <button 
        className="profile-back-btn"
        onClick={() => navigate("/WardenDashboard")}
      >
        ← Back
      </button>

      <h2>My Profile</h2>

      {!edit ? (
        <div className="profile-card">
          <p><strong>Full Name:</strong> {data.fullName}</p>
          <p><strong>Gender:</strong> {data.gender}</p>
          <p><strong>Warden ID:</strong> {data.wardenId}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>

          <button onClick={() => setEdit(true)} className="update-btn">
            Update Profile
          </button>
        </div>
      ) : (
        <div className="profile-card">
          <input name="fullName" value={data.fullName || ""} onChange={handleChange} />
          <select name="gender" value={data.gender || ""} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input name="email" value={data.email || ""} onChange={handleChange} />
          <input name="phone" value={data.phone || ""} onChange={handleChange} />

          <button onClick={handleUpdate} className="save-btn">Save</button>
          <button onClick={() => setEdit(false)} className="cancel-btn">Cancel</button>
        </div>
      )}
    </div>
  );
};

export default WardenProfile;