import React, { useEffect, useState } from "react";
import "../styles/studentdashboard.css";
import { Navigate, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Complaints from './wardencomponents/Complaints';

const StudentDashboard = () => {
  const [data, setData] = useState({});
  const location = useLocation();
  const roll = localStorage.getItem("rollNumber");
  const [notices, setNotices] = useState([]);
  const [complaints,setComplaints] = useState([])
  const [countComplaints,setCountComplaints] = useState(0);

  const handleLogout = () => {
    localStorage.clear(); 
    window.location.href = "/";
  };

  //complaints and notices

  useEffect(() => {
    fetch("http://localhost:8080/notices")
      .then((res) => res.json())
      .then((data) => {
        setNotices(data.slice(0, 3));
      })
      .catch((err) => console.error(err));

    fetch(`http://localhost:8080/student/getcomplaints/${roll}`)
      .then(res=>res.json())
      .then(data=>{
        setComplaints(data.slice(0, 2));
        setCountComplaints(countComplaints++);
    })

  //   fetch("http://localhost:8080/student/countcomplaints")
  //   .then(res => res.text())
  //   .then()
  }, []);

  useEffect(() => {
    if (!roll) return;

    const getProfile = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/student/profile/${roll}`,
        );
        const result = await res.json();
        console.log(result);
        setData(result);
      } catch (error) {
        alert("Student Not Found", error);
      }
    };

    getProfile();
  }, [roll]);

  return (
    <div className="student-dashboard">
      <h1>Student Dashboard</h1>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      <div className="student-cards">
        <NavLink to="/StudentDashboard/Profile">
          <h3>Profile</h3>
          <p>View your details</p>
        </NavLink>

        <NavLink to="/StudentDashboard/Notices">
          <h3>Notices</h3>
          <p>Latest updates</p>
        </NavLink>

        <NavLink to="/StudentDashboard/MyComplaints">
          <h3>Complaints</h3>
          <p>Post / Check Complaints</p>
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
            <p>
              {
                complaints.filter(c => c.status !== "resolved").length
              }
            </p>
          </div>

          <div className="q-card">
            <h4>Today Menu</h4>
            <p>Rice + Dal</p>
          </div>
        </div>

        <div className="preview-section">
          <h3>Recent Notices</h3>
          <ul>
            {notices.length === 0 ? (
              <li>No notices</li>
            ) : (
              notices.map((notice) => <li key={notice.id}>{notice.title}</li>)
            )}
          </ul>

          <NavLink to="/StudentDashboard/Notices">View All →</NavLink>
        </div>

        <div className="preview-section">
          <h3>My Complaints</h3>
          <ul>
            {
              complaints.length === 0 ? (
                <li>No Complaints Yet</li>
              ) : (
                complaints.map((comp,idx) => <li key={idx}>{comp.title} - {comp.status}</li>)
              )
            }
          </ul>

          <NavLink to="/StudentDashboard/MyComplaints">View All →</NavLink>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
