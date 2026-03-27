import React, { useState, useEffect } from "react";
import "../../styles/notices.css";
import { useNavigate } from "react-router-dom";

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const navigate = useNavigate();

  // ✅ Fetch notices from backend
  const fetchNotices = () => {
    fetch("http://localhost:8080/notices")
      .then((res) => res.json())
      .then((data) => setNotices(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <div className="warden-notices-container">

      <button 
        className="Notices-back-btn"
        onClick={() => navigate("/StudentDashboard")}
      >
        ← Back
      </button>
      <h2>📢 Notices / Announcements</h2>

      {/* Notices List */}
      <div className="warden-notice-list">
        {notices.length === 0 ? (
          <p className="warden-empty">No notices available</p>
        ) : (
          notices.map((notice) => (
            <div key={notice.id} className="warden-notice-card">
              <h3>{notice.title}</h3>
              <p>{notice.description}</p>

              <span>
                {notice.createdAt
                  ? new Date(notice.createdAt).toLocaleString()
                  : ""}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notices;