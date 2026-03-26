import React, { useEffect, useState } from "react";
import "../styles/wardendashboard.css";
import { NavLink } from "react-router-dom";

const WardenDashboard = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const getWarden = async () => {
      try {
        const res = await fetch("http://localhost:8080/warden/profile");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.log("Error fetching warden");
      }
    };

    getWarden();
  }, []);

  return (
    <div className="warden-dashboard">

      <h1>Warden Dashboard</h1>

      {/* TOP CARDS */}
      <div className="warden-cards">

        <NavLink to="/WardenDashboard/Students">
          <h3>Students</h3>
          <p>View all students</p>
        </NavLink>

        <NavLink to="/WardenDashboard/Complaints">
          <h3>Complaints</h3>
          <p>Manage complaints</p>
        </NavLink>

        <NavLink to="/StudentDashboard/Notices">
          <h3>Notices</h3>
          <p>Post updates</p>
        </NavLink>

        <NavLink to="/WardenDashboard/Reports">
          <h3>Reports</h3>
          <p>View analytics</p>
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
            <p>120</p>
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
            <li>Inspection tomorrow</li>
            <li>Mess timing updated</li>
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