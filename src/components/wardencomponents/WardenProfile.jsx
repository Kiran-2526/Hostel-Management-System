import React, { useEffect, useState } from "react";
import "./../../styles/profile.css";
import { useNavigate } from "react-router-dom";

const WardenProfile = () => {
  const [data, setData] = useState({});
  const [edit, setEdit] = useState(false);
  const [permissions, setPermissions] = useState([]);
  const navigate = useNavigate();
  const roll = localStorage.getItem("wardenId");

  // Fetch profile
  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await fetch(`http://localhost:8080/warden/profile/${roll}`);
        const result = await res.json();
        setData(result);
      } catch (error) {
        alert("Failed to load profile",error);
      }
    };

    if (roll) getProfile();
  }, [roll]);

  // 🔥 FIXED: get permissions
  useEffect(() => {
    fetch(`http://localhost:8080/permission/all`)
      .then((res) => res.json())
      .then((data) => setPermissions(data))
      .catch((err) => console.error(err));
  }, []);

  // Handle input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Update profile
  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:8080/warden/profile/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Profile Updated Successfully");
        setEdit(false);
      } else {
        alert("Update failed");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating profile");
    }
  };

  // 🔥 FIXED: approve
  const handleApprove = async (id) => {
    await fetch(`http://localhost:8080/permission/approve/${id}`, {
      method: "PUT",
    });

    // update UI instantly
    setPermissions((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "Approved" } : p)),
    );

    alert("Approved");
  };

  // 🔥 FIXED: return
  const handleReturn = async (id) => {
    await fetch(`http://localhost:8080/permission/delete/${id}`, {
      method: "DELETE",
    });

    // remove from UI
    setPermissions((prev) => prev.filter((p) => p.id !== id));

    alert("Permission removed");
  };

  return (
    <div className="profile-container">
      <button
        className="profile-back-btn"
        onClick={() => navigate("/WardenDashboard")}
      >
        ← Back
      </button>

      <h2>My Profile</h2>

      {!edit ? (
        <div className="profile-card">
          <p>
            <strong>Full Name:</strong> {data.fullName}
          </p>
          <p>
            <strong>Gender:</strong> {data.gender}
          </p>
          <p>
            <strong>Warden ID:</strong> {data.wardenId}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Phone:</strong> {data.phone}
          </p>

          <button onClick={() => setEdit(true)} className="update-btn">
            Update Profile
          </button>
        </div>
      ) : (
        <div className="profile-card">
          <input
            name="fullName"
            value={data.fullName || ""}
            onChange={handleChange}
          />
          <select
            name="gender"
            value={data.gender || ""}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            name="email"
            value={data.email || ""}
            onChange={handleChange}
          />
          <input
            name="phone"
            value={data.phone || ""}
            onChange={handleChange}
          />

          <button onClick={handleUpdate} className="save-btn">
            Save
          </button>
          <button onClick={() => setEdit(false)} className="cancel-btn">
            Cancel
          </button>
        </div>
      )}

      <div className="permission-list">
        <h3>Permission Requests</h3>

        {permissions.length === 0 ? (
          <p>No requests</p>
        ) : (
          permissions.map((p) => (
            <div key={p.id} className="perm-card">
              <p>
                {p.fullName} (Room {p.roomNumber})
              </p>
              <p>Year: {p.year}</p>
              <p>Status: {p.status}</p>

              {p.status === "Pending" && (
                <button onClick={() => handleApprove(p.id)}>Approve</button>
              )}

              {p.status === "Approved" && (
                <button onClick={() => handleReturn(p.id)}>Returned</button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WardenProfile;
