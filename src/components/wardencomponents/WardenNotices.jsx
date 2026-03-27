import React, { useState, useEffect } from "react";
import "../../styles/notices.css";

const WardenNotices = () => {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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

  // ✅ Add notice to backend
  const handleAdd = async () => {
    if (!title || !description) return;

    try {
      await fetch("http://localhost:8080/notices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      fetchNotices(); // refresh list
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ Delete notice from backend
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/notices/${id}`, {
        method: "DELETE",
      });

      fetchNotices(); // refresh list
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="warden-notices-container">
      <h2>📢 Notices / Announcements</h2>

      {/* Form */}
      <div className="warden-notice-form">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={handleAdd}>Add Notice</button>
      </div>

      {/* Notices List */}
      <div className="warden-notice-list">
        {notices.length === 0 ? (
          <p className="warden-empty">No notices yet</p>
        ) : (
          notices.map((notice) => (
            <div key={notice.id} className="warden-notice-card">
              <h3>{notice.title}</h3>
              <p>{notice.description}</p>

              {/* ✅ correct date from backend */}
              <span>
                {notice.createdAt
                  ? new Date(notice.createdAt).toLocaleString()
                  : ""}
              </span>

              <button onClick={() => handleDelete(notice.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WardenNotices;