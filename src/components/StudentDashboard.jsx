import React, { useEffect, useState } from "react";
import "../styles/studentdashboard.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const StudentDashboard = () => {
  const[data,setData] = useState({})
  const location = useLocation();
  const roll = location.state?.rollNumber;
  useEffect(()=>{
    const getProfile = async()=>{
      try {
        const res = await fetch(`http://localhost:8080/student/profile/${roll}`);
        const result = await res.json();
        console.log(result);
        setData(result);
      } catch (error) {
        alert("Student Not Found");
      }
    };
    getProfile();
  },[roll])
  return (
    <div className="student-dashboard">
      <h1>Student Dashboard</h1>

      <div className="student-cards">
        <NavLink to="/StudentDashboard/Profile" >
          <h3>Profile</h3>
          <p>View your details</p>
        </NavLink>

        <NavLink to="/StudentDashboard/RaiseComplaint">
          <h3>Raise Complaint</h3>
          <p>Submit hostel issues</p>
        </NavLink>

        <NavLink to="/StudentDashboard/MyComplaints">
          <h3>My Complaints</h3>
          <p>Track status</p>
        </NavLink>

        <NavLink to="/StudentDashboard/Notices">
          <h3>Notices</h3>
          <p>Latest updates</p>
        </NavLink>
      </div>

      <div className="WelcomeScreen">

        <h2>Welcome, {data.fullName} 👋</h2>
        <p>Hope you're having a great day in hostel!</p>

        <div className="quick-cards">
          <div className="q-card">
            <h4>Room</h4>
            <p>{data.roomNumber}</p>
          </div>

          <div className="q-card">
            <h4>Pending Complaints</h4>
            <p>2</p>
          </div>

          <div className="q-card">
            <h4>Today Menu</h4>
            <p>Rice + Dal</p>
          </div>
        </div>

        <div className="preview-section">
          <h3>Recent Notices</h3>
          <ul>
            <li>Water supply maintenance tomorrow</li>
            <li>Mess timing changed</li>
          </ul>

          <NavLink to="/StudentDashboard/Notices">View All →</NavLink>
        </div>

        <div className="preview-section">
          <h3>My Complaints</h3>
          <ul>
            <li>Fan not working - Pending</li>
            <li>Light issue - Resolved</li>
          </ul>

          <NavLink to="/StudentDashboard/MyComplaints">View All →</NavLink>
        </div>

      </div>

    </div>
  );
};

export default StudentDashboard;