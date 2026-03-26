import React, { useState } from "react";
import "../styles/warden.css"; // separate file

const WardenDashboard = () => {
  const [activeTab, setActiveTab] = useState("complaints");

  return (
    <div className="warden-container">

      {/* Sidebar */}
      <div className="warden-sidebar">
        <h2>Warden Panel</h2>

        <ul>
          <li onClick={() => setActiveTab("complaints")}>Complaints</li>
          <li onClick={() => setActiveTab("students")}>Students</li>
          <li onClick={() => setActiveTab("notices")}>Notices</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="warden-content">

        {activeTab === "complaints" && (
          <div>
            <h2>All Complaints</h2>

            <div className="warden-card">
              <h4>Room 101 - Water Issue</h4>
              <p>Leakage problem</p>

              <button className="warden-approve">Approve</button>
              <button className="warden-reject">Reject</button>
              <button className="warden-resolve">Resolved</button>
            </div>
          </div>
        )}

        {activeTab === "students" && (
          <h2>Students List</h2>
        )}

        {activeTab === "notices" && (
          <div>
            <h2>Post Notice</h2>
            <textarea placeholder="Write notice..."></textarea>
            <button className="warden-post">Post</button>
          </div>
        )}

      </div>
    </div>
  );
};

export default WardenDashboard;