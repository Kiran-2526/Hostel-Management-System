import React, { useEffect, useState } from "react";
import "./../../styles/profile.css";

const Profile = () => {
  const [data, setData] = useState({});
  const roll = localStorage.getItem("rollNumber");
  console.log(roll);
  
  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await fetch(`http://localhost:8080/student/profile/${roll}`);
        const result = await res.json();
        console.log(result);
        setData(result);
      } catch (error) {
        alert("Failed to load profile");
      }
    };

    if (roll) {
      getProfile();
    }
  }, [roll]);

  return (
    <div className="profile-container">
      <h2>My Profile</h2>

      <div className="profile-card">
        <p><strong>Full Name:</strong> {data.fullName}</p>
        <p><strong>Gender:</strong> {data.gender}</p>
        <p><strong>Roll Number:</strong> {data.rollNumber}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Room Number:</strong> {data.roomNumber}</p>
        <p><strong>Year:</strong> {data.year}</p>
      </div>
    </div>
  );
};

export default Profile;