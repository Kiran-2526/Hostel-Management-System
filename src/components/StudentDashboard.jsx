import React from "react";
import "../styles/dashboard.css";
import { NavLink } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>

      <div className="cards">
        <NavLink to="/StudentDashboard/Profile" className={({isActive})=>isActive?"active":""}>
          <h3>Profile</h3>
          <p>View your details</p>
        </NavLink>

        <NavLink to="/StudentDashboard/RaiseComplaint" className={({isActive})=>isActive?"active":""}>
          <h3>Raise Complaint</h3>
          <p>Submit hostel issues</p>
        </NavLink>

        <NavLink to="/StudentDashborad/MyComplaints" className={({isActive})=>isActive?"active":""}>
          <h3>My Complaints</h3>
          <p>Track status</p>
        </NavLink>

        <NavLink to="/StudentDashboard/Notices" className={({isActive})=>isActive?"active":""}>
          <h3>Notices</h3>
          <p>Latest updates</p>
        </NavLink>
      </div>
    </div>
  );
};

export default StudentDashboard;