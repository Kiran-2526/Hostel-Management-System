import React, { useState } from "react";
import "../styles/warden.css";

const WardenDashboard = () => {
  const [activeTab, setActiveTab] = useState("complaints");

  return (
    <div className="warden-container">
      
      {/* 🔵 SIDEBAR */}
      <div className="sidebar">
        <h2>Warden Panel</h2>

        <ul>
          <li onClick={() => setActiveTab("complaints")}>Complaints</li>
          <li onClick={() => setActiveTab("students")}>Students</li>
          <li onClick={() => setActiveTab("notices")}>Notices</li>
          <li onClick={() => setActiveTab("profile")}>Profile</li>
        </ul>
      </div>

      {/* 🟢 MAIN CONTENT */}
      <div className="content">

        {activeTab === "complaints" && (
          <div>
            <h2>All Complaints</h2>

            <div className="complaint-card">
              <h4>Room 101 - Water Issue</h4>
              <p>Water leakage in bathroom</p>

              <button className="approve">Approve</button>
              <button className="reject">Reject</button>
              <button className="resolve">Mark Resolved</button>
            </div>
          </div>
        )}

        {activeTab === "students" && (
          <div>
            <h2>Students List</h2>
            <p>List of all students will appear here</p>
          </div>
        )}

        {activeTab === "notices" && (
          <div>
            <h2>Post Notice</h2>

            <textarea placeholder="Write notice..."></textarea>
            <button className="post">Post</button>
          </div>
        )}

        {activeTab === "profile" && (
          <div>
            <h2>Profile</h2>
            <p>Warden details here</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default WardenDashboard;