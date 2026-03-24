import React from "react";
import "../styles/dashboard.css";

const StudentDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>Profile</h3>
          <p>View your details</p>
        </div>

        <div className="card">
          <h3>Raise Complaint</h3>
          <p>Submit hostel issues</p>
        </div>

        <div className="card">
          <h3>My Complaints</h3>
          <p>Track status</p>
        </div>

        <div className="card">
          <h3>Notices</h3>
          <p>Latest updates</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;