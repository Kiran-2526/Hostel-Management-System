import React, { useEffect, useState } from "react";
import "../styles/wardendashboard.css";
import { Navigate, NavLink, useLocation } from "react-router-dom";

const WardenDashboard = () => {
  const [data, setData] = useState({});
  const location = useLocation();

  const [studentCount, setStudentCount] = useState(0);

  const [notices, setNotices] = useState([]);

  const wardenId = localStorage.getItem("wardenId");

  const handleLogout = () => {
    localStorage.clear(); // 🔥 important
    window.location.href = "/";
  };

  useEffect(() => {
    fetch("http://localhost:8080/notices")
      .then((res) => res.json())
      .then((data) => {
        // take only latest 3 notices
        setNotices(data.slice(0, 3));
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!wardenId) return;

    const getWarden = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/warden/profile/${wardenId}`,
        );
        const result = await res.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.log("Error fetching warden", error);
      }
    };

    getWarden();
  }, [wardenId]);

  useEffect(() => {
    fetch("http://localhost:8080/student/count")
      .then((res) => res.json())
      .then((data) => setStudentCount(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="warden-dashboard">
      <h1>Warden Dashboard</h1>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      {/* TOP CARDS */}
      <div className="warden-cards">
        <NavLink to="/WardenDashboard/WardenProfile">
          <h3>Profile</h3>
          <p>{data.fullName}'s Profile</p>
        </NavLink>

        <NavLink to="/WardenDashboard/Students">
          <h3>Students</h3>
          <p>View all students</p>
        </NavLink>

        <NavLink to="/WardenDashboard/Notices">
          <h3>Notices</h3>
          <p>Post updates</p>
        </NavLink>

        <NavLink to="/WardenDashboard/Complaints">
          <h3>Complaints</h3>
          <p>Manage complaints</p>
        </NavLink>
      </div>

      {/* WELCOME */}
      <div className="warden-welcome">
        <h2>Welcome, {data.fullName} 👋</h2>
        <p>Manage hostel efficiently</p>

        {/* QUICK CARDS */}
        <div className="warden-quick-cards">
          <div className="warden-q-card">
            <h4>Total Students</h4>
            <p>{studentCount}</p>
          </div>

          <div className="warden-q-card">
            <h4>Pending Complaints</h4>
            <p>5</p>
          </div>

          <div className="warden-q-card">
            <h4>Resolved Today</h4>
            <p>3</p>
          </div>
        </div>

        {/* NOTICES */}
        <div className="warden-preview">
          <h3>Recent Notices</h3>
          <ul>
            {notices.length === 0 ? (
              <li>No notices</li>
            ) : (
              notices.map((notice) => <li key={notice.id}>{notice.title}</li>)
            )}
          </ul>

          <NavLink to="/WardenDashboard/Notices">View All →</NavLink>
        </div>

        {/* COMPLAINTS */}
        <div className="warden-preview">
          <h3>Recent Complaints</h3>
          <ul>
            <li>Water issue - Pending</li>
            <li>Fan repair - Resolved</li>
          </ul>

          <NavLink to="/WardenDashboard/Complaints">View All →</NavLink>
        </div>
      </div>
    </div>
  );
};

export default WardenDashboard;
