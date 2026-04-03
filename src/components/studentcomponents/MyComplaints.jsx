import React, { useState, useEffect } from "react";
import "../../styles/complaints.css";
import { useNavigate } from "react-router-dom";

const MyComplaints = () => {
  const navigate = useNavigate();

  const fullname = localStorage.getItem("fullName");
  const roomNumber = localStorage.getItem("roomNumber");
  const roll = localStorage.getItem("rollNumber");
  const [search, setSearch] = useState("");

  const [data, setData] = useState({
    title: "",
    category: "",
    description: "",
    roomNumber: roomNumber || "",
    fullName: fullname || "",
    rollNumber: roll
  });

  // const [filtered, setFiltered] = useState([]);

  // const handleSearch = () => {
  //   const result = complaints.filter((c) =>
  //     c.title.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setFiltered(result);
  // };

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {

    if (!fullname || !roomNumber) {
      fetch(`http://localhost:8080/student/profile/${roll}`)
        .then((res) => res.json())
        .then((result) => {
          setData((prev) => ({
            ...prev,
            fullName: result.fullName,
            roomNumber: result.roomNumber,
          }));
        });
    }
  }, []);

  useEffect(() => {
    const fetchComplaints = () => {
      fetch(`http://localhost:8080/student/getcomplaints/${roll}`)
        .then((res) => res.json())
        .then((result) => {
          setComplaints(result);
        })
        .catch((err) => console.error(err));
    };

    fetchComplaints();
    const interval = setInterval(fetchComplaints, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    if (!data.title || !data.category || !data.description) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/student/postcomplaints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        // alert("Complaint Posted Successfully");

        // refresh complaints list
        setComplaints((prev) => [result, ...prev]);

        setData({
          title: "",
          category: "",
          description: "",
          roomNumber: data.roomNumber,
          fullName: data.fullName,
        });
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error(error);
      alert("Error posting complaint");
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8080/student/deletecomplaint/${id}`,
        {
          method: "DELETE",
        },
      );

      const result = await res.text();

      if (res.ok) {
        alert("Deleted Successfully");

        setComplaints((prev) => prev.filter((c) => c.cid !== id));
      } else {
        alert(result);
      }
    } catch (error) {
      console.error(error);
      alert("Error deleting complaint");
    }
  };

  const filteredComplaints = complaints.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.description.toLowerCase().includes(search.toLowerCase()) ||
    c.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="complaints-page">
      <h1>Raise Complaints</h1>

      <button
        className="profile-back-btn"
        onClick={() => navigate("/StudentDashboard")}
      >
        ← Back
      </button>

      <div className="post-complaints">
        <div className="complaints-details">
          <input
            type="text"
            placeholder="Post your Complaint Title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />

          <select
            value={data.category}
            onChange={(e) => setData({ ...data, category: e.target.value })}
          >
            <option value="">Select Complaint</option>
            <option value="plumbing">Plumbing</option>
            <option value="furniture">Furniture</option>
            <option value="electrical">Electrical</option>
            <option value="others">Others</option>
          </select>

          <input type="text" value={data.roomNumber} readOnly />
          <input type="text" value={data.fullName} readOnly />
        </div>

        <textarea
          placeholder="Description"
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />

        <button type="button" onClick={handleSubmit}>
          Post Complaint
        </button>
      </div>

      {/* 🔥 YOUR ORIGINAL SEARCH BAR (UNCHANGED) */}
      <div className="my-complaints">
        <div className="search-complaints">
          <input type="text" placeholder="Search for your complaint" onChange={(e) => setSearch(e.target.value)} value={search} />
          <select>
            <option>Select Complaint</option>
            <option value="plumbing">Plumbing</option>
            <option value="furniture">Furniture</option>
            <option value="electrical">Electrical</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="complaints-list">

          {(search ? filteredComplaints : complaints).length === 0 ? (
            <p>No complaints found</p>
          ) : (
            [...(search ? filteredComplaints : complaints)]
              .reverse()
              .map((c) => (
                <div key={c.cid} className="complaint-card">

                  <div className="complaint-info">
                    <h4>{c.title}</h4>
                    <p>{c.description}</p>
                    <span>{c.category}</span>

                    <small>
                      {c.fullName} - Room {c.roomNumber}
                    </small>

                    <span>Status: {c.status || "Pending"}</span>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(c.cid)}
                  >
                    Delete
                  </button>

                </div>
              ))
          )}

        </div>
      </div>
    </div>
  );
};

export default MyComplaints;
