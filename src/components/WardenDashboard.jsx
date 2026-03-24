import React from "react";
import "../styles/dashboard.css";

const WardenDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Warden Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>All Complaints</h3>
          <p>View and manage complaints</p>
        </div>

        <div className="card">
          <h3>Pending Requests</h3>
          <p>Approve or reject</p>
        </div>

        <div className="card">
          <h3>Manage Students</h3>
          <p>View student details</p>
        </div>

        <div className="card">
          <h3>Post Notice</h3>
          <p>Send updates to students</p>
        </div>
      </div>
    </div>
  );
};

export default WardenDashboard;